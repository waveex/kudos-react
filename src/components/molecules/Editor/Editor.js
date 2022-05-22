import React, {
    useCallback,
    useMemo,
    useRef,
    useState,
  } from 'react';
  import { EditorState } from 'draft-js';

  import Editor from '@draft-js-plugins/editor';
  import mentionsStyles from './MentionsStyles.module.css';
  import createMentionPlugin, {
    defaultSuggestionsFilter,
  } from '@draft-js-plugins/mention';
  import createHashtagPlugin from '@draft-js-plugins/hashtag';
  import editorStyles from './RemoteMentionEditor.module.css';
  import createEmojiPlugin from '@draft-js-plugins/emoji';
  import '../../../../node_modules/@draft-js-plugins/emoji/lib/plugin.css'
  import '../../../../node_modules/@draft-js-plugins/hashtag/lib/plugin.css'


const RemoteMentionEditor = ({persons}) => {

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
          <div   {...parentProps}>
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
    const ref = useRef(null);

    const [editorState, setEditorState] = useState(() =>
      EditorState.createEmpty()
    );
    const [open, setOpen] = useState(false);
    const [suggestions, setSuggestions] = useState(persons);

    const { MentionSuggestions, plugins, EmojiSuggestions, EmojiSelect } = useMemo(() => {
      const mentionPlugin = createMentionPlugin({
        entityMutability: 'IMMUTABLE',
        theme: mentionsStyles,
        mentionPrefix: '@',
        supportWhitespace: true,
      });
    const emojiPlugin = createEmojiPlugin();
    const hashtagPlugin = createHashtagPlugin();

      // eslint-disable-next-line no-shadow
      const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
      const { MentionSuggestions } = mentionPlugin;
      // eslint-disable-next-line no-shadow
      const plugins = [mentionPlugin, emojiPlugin, hashtagPlugin];
      return { plugins, MentionSuggestions, EmojiSuggestions, EmojiSelect };
    }, []);

    const onChange = useCallback((_editorState) => {
        setEditorState(_editorState);
      }, []);
    const onOpenChange = useCallback((_open) => {
      setOpen(_open);
    }, []);
    const onSearchChange = useCallback(({ value }) => {
        setSuggestions(defaultSuggestionsFilter(value, persons));
      }, []);
    return (
      <div
        className={editorStyles.editor}
        onClick={() => {
       focus();
        }}
      >
        <Editor
          editorKey={'editor'}
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          ref={ref}
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
        popoverContainer={({ children }) => <div className={editorStyles.popoverContainer}>{children}</div>}
        />
        <EmojiSuggestions />
        <EmojiSelect  />
      </div>
    );
}

export default RemoteMentionEditor;
