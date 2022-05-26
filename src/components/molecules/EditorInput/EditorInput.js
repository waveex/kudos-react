import React, { useCallback, useEffect, useMemo, useState } from "react";
import { EditorState } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import mentionsStyles from "./MentionsStyles.module.css";
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "@draft-js-plugins/mention";
import createHashtagPlugin from "@draft-js-plugins/hashtag";
import editorStyles from "./EditorInput.module.css";
import createEmojiPlugin from "@draft-js-plugins/emoji";
import "../../../../node_modules/@draft-js-plugins/emoji/lib/plugin.css";
import "../../../../node_modules/@draft-js-plugins/hashtag/lib/plugin.css";
import createCounterPlugin from "@draft-js-plugins/counter";
import counterStyles from "./CouterStyles.css";
import "../../../../node_modules/@draft-js-plugins/counter/lib/plugin.css";
import { convertToHTML } from "draft-convert";
import PropTypes from "prop-types";

function Entry(props) {
  const {
    persons,
    mention,
    theme,
    searchValue,
    isFocused,
    selectmention,
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      <div className={theme?.mentionSuggestionsEntryContainer}>
        <img
          src={mention.img}
          className={theme?.mentionSuggestionsEntryAvatar}
          role="presentation"
        />
        <p className={theme?.mentionSuggestionsEntryText}>{mention.name}</p>
        <p className={theme?.mentionSuggestionsEntryText}>{mention.title}</p>
      </div>
    </div>
  );
}

const EditorInput = ({ persons, value, onChange }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(persons);
  const [readOnly, setReadOnly] = useState(false);
  const { MentionSuggestions, plugins, EmojiSelect, CharCounter } =
    useMemo(() => {
      const mentionPlugin = createMentionPlugin({
        entityMutability: "IMMUTABLE",
        theme: mentionsStyles,
        mentionPrefix: "@",
        supportWhitespace: true,
        mentionComponent({children}) {
          return (
            <span className={mentionsStyles.mentionWrapper}>
              {console.log(children)}
            </span>
          );
        },
      });
      const emojiPlugin = createEmojiPlugin();
      const hashtagPlugin = createHashtagPlugin();
      const counterPlugin = createCounterPlugin({ theme: counterStyles });
      const { CharCounter } = counterPlugin;
      // eslint-disable-next-line no-shadow
      const { EmojiSelect } = emojiPlugin;
      const { MentionSuggestions } = mentionPlugin;
      // eslint-disable-next-line no-shadow
      const plugins = [
        mentionPlugin,
        emojiPlugin,
        hashtagPlugin,
        counterPlugin,
      ];
      return {
        plugins,
        MentionSuggestions,
        EmojiSelect,
        CharCounter,
      };
    }, []);
  const onChangeState = useCallback((editorState) => {
    setEditorState(editorState);
  }, []);
  const onOpenChange = useCallback((_open) => {
    setOpen(_open);
  }, []);
  const onSearchChange = useCallback(({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, persons));
  }, []);
  console.log(convertToHTML(editorState.getCurrentContent()));
  const editorContent = editorState
    .getCurrentContent()
    .getPlainText("\u0001").length;
  useEffect(() => {
    if (editorContent >= 500) {
      setReadOnly(true);
    }
  }, [editorContent]);

  return (
    <div
      className={editorStyles.editor}
      onClick={() => {
        focus();
      }}
    >
      <Editor
        required
        name="editorInput"
        editorKey={"editorInput"}
        editorState={editorState}
        onChange={(e) => {
          onChangeState(e), onChange(e);
        }}
        value={value}
        plugins={plugins}
        spellCheck
        readOnly={readOnly}
        placeholder="Napisz wiadomość 😊"
      />
      <MentionSuggestions
        open={open}
        onOpenChange={onOpenChange}
        suggestions={suggestions}
        onSearchChange={onSearchChange}
        onAddMention={() => {
          // get the mention object selected
        }}
        entryComponent={Entry}
        popoverContainer={({ children }) => (
          <div className={mentionsStyles.popoverContainer}>{children}</div>
        )}
      />
      <EmojiSelect />
      <div className="counterStyles-counter">
        <CharCounter editorState={editorState} limit={500} />
        <span>/500</span>
      </div>
    </div>
  );
};
EditorInput.propTypes = {
  onChange: PropTypes.func,
}
export default EditorInput;
