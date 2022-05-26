import React from "react";

import { StyledWrapper } from "./PostForm.styles";

import "draft-js/dist/Draft.css";
import EditorInput from "../EditorInput/EditorInput";
import { Text } from "../../atoms/Text/Text";
import { Controller } from "react-hook-form";

const PostForm = ({ persons, control }) => {
  return (
    <StyledWrapper>
      <Text>Treść posta nad kudosem</Text>
      <Controller
        control={control}
        name="editorInput"
        rules={{
          required: true,
          min:1,
          max:500,
          }
        }
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <EditorInput persons={persons} onChange={onChange}   />
        )}
      />
    </StyledWrapper>
  );
};

export default PostForm;
