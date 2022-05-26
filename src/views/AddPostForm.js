import React, { useEffect, useState } from "react";
import { FormWrapper } from "./AddPostForm.styles";
import KudosList from "../components/organisms/KudosList/KudosList";
import PropTypes from "prop-types";
import FormHeader from "../components/molecules/FormHeader/FormHeader";
import PostForm from "../components/molecules/PostForm/PostForm";
import PersonSelect from "../components/molecules/PersonSelect/PersonSelect";
import FormFooter from "../components/molecules/FormFooter/FormFooter";

const AddPostForm = ({
  handleSubmit,
  control,
  errors,
  onSubmit,
  kudoses,
  persons,
  handleCloseModal,
}) => {
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormHeader handleCloseModal={handleCloseModal} />
      <PostForm control={control} persons={persons} />
      <PersonSelect persons={persons} control={control} />
      <KudosList kudoses={kudoses} control={control} />
      <FormFooter control={control} />
    </FormWrapper>
  );
};
AddPostForm.propTypes = {
  kudoses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      isActive: PropTypes.bool,
    })
  ),
};

export default AddPostForm;
