import React from "react";
import { Icon } from "../../atoms/Icon/Icon";
import { EmoticonsWrapper, StyledWrapper } from "./PostForm.styles";
import gif from "../../../assets/img/icons/gif.svg";
import emotikon from "../../../assets/img/icons/emotikon.svg";
import attachment from "../../../assets/img/icons/attachment-icon.svg";
import EditorComponent from "../Editor/Editor";
import 'draft-js/dist/Draft.css';
import RemoteMentionEditor from "../Editor/Editor";

const PostForm = ({persons}) => {


  return (
    <StyledWrapper>
    <RemoteMentionEditor persons={persons} />

    </StyledWrapper>
  );
};

export default PostForm;
