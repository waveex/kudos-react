import React, { useCallback, useMemo, useState } from "react";
import { EditorState } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import mentionsStyles from "./MentionsStyles.module.css";
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "@draft-js-plugins/mention";
import createHashtagPlugin from "@draft-js-plugins/hashtag";
import editorStyles from "./RemoteMentionEditor.module.css";
import createEmojiPlugin from "@draft-js-plugins/emoji";
import "../../../../node_modules/@draft-js-plugins/emoji/lib/plugin.css";
import "../../../../node_modules/@draft-js-plugins/hashtag/lib/plugin.css";
import createCounterPlugin from "@draft-js-plugins/counter";
import counterStyles from "./CouterStyles.css";
import "../../../../node_modules/@draft-js-plugins/counter/lib/plugin.css";

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
        <div className={theme?.mentionSuggestionsEntryContainerLeft}>
          <img
            src={mention.img}
            className={theme?.mentionSuggestionsEntryAvatar}
            role="presentation"
          />
        </div>

        <div className={theme?.mentionSuggestionsEntryContainerRight}>
          <div className={theme?.mentionSuggestionsEntryText}>
            {mention.name}
          </div>

          <div className={theme?.mentionSuggestionsEntryTitle}>
            {mention.title}
          </div>
        </div>
      </div>
    </div>
  );
}
const RemoteMentionEditor = ({ persons, value, onChange }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(persons);

  const { MentionSuggestions, plugins, EmojiSelect, CharCounter } =
    useMemo(() => {
      const mentionPlugin = createMentionPlugin({
        entityMutability: "IMMUTABLE",
        theme: mentionsStyles,
        mentionPrefix: "@",
        supportWhitespace: true,
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
  const readyToSendData = editorState
    .getCurrentContent()
    .getPlainText("\u0001");

  return (
    <div
      className={editorStyles.editor}
      onClick={() => {
        focus();
      }}
    >
      <Editor
        name="editor"
        editorKey={"editor"}
        editorState={editorState}
        onChange={(e) => {
          onChangeState(e),
          onChange(e);
        }}
        value={value}
        plugins={plugins}
        spellCheck
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
          <div className={editorStyles.popoverContainer}>{children}</div>
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

export default RemoteMentionEditor;
