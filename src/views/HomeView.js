import React, { useState } from "react";
import AddPost from "../components/organisms/AddPost/AddPost";
import { StyledWrapper } from "./HomeView.styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "../components/organisms/Modal/Modal";
import AddPostForm from "./AddPostForm";
import useModal from "../hooks/useModal";
import PostsList from "../components/organisms/PostsList/PostsList";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";

export const mapStatetoProps = (state) => ({
  posts: state.postState,
  persons: state.personsState,
  kudoses: state.kudosesState,
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const defaultValues = {
  postId: "",
  authorId: "",
  avatar: "",
  date: "",
  postDescription: "",
  likes: 0,
  kudos: {
    kudosId: "",
    personId: "",
  },
  group: "",
};
const HomeView = ({ posts, persons, kudoses }) => {
  const {
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({
    defaultValues: defaultValues,
  });

  let now = dayjs().format("DD/MM/YYYY");

  const [postsList, setPostsList] = useState(posts);
  const [formValues, setFormValues] = useState(defaultValues);

  const handleCreatePost = (data) => {
    const getEditorData = data.editorInput
      .getCurrentContent()
      .getPlainText("\u0001");

    const selectedData = data;
    const getSelectedPerson = data.selectPeople;
    const getSelectedKudos = data.selectedKudos;
    const selectedPerson = getSelectedPerson.value.id;
    let newPost = {
      postId: getRandomIntInclusive(7, 99),
      authorId: activePerson.id,
      avatar: activePerson.img,
      date: now,
      postDescription: getEditorData,
      likes: 0,
      kudos: {
        kudosId: Number(selectedData.selectedKudos),
        personId: selectedPerson,
      },
    };

    setPostsList([newPost, ...postsList]);
  };

  const activePerson = persons.find((person) => person.isActive);

  const onSubmit = (data) => {
    handleCreatePost(data);
    setFormValues(defaultValues);
    handleCloseModal();
  };

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  return (
    <StyledWrapper>
      <AddPost
        onClick={handleOpenModal}
        persons={persons}
        activePerson={activePerson}
      />
      <Modal
        isOpen={isOpen}
        closeTimeoutMS={200}
        onRequestClose={handleCloseModal}
      >
        <AddPostForm
          onSubmit={onSubmit}
          postsList={postsList}
          handleCloseModal={handleCloseModal}
          kudoses={kudoses}
          persons={persons}
          handleSubmit={handleSubmit}
          errors={errors}
          watch={watch}
          control={control}
        />
      </Modal>
      <PostsList postsList={postsList} persons={persons} kudoses={kudoses} />
    </StyledWrapper>
  );
};
HomeView.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number,
      authorId: PropTypes.number,
      date: PropTypes.string,
      avatar: PropTypes.string,
      description: PropTypes.string,
      kudos: PropTypes.objectOf(PropTypes.number),
    })
  ),
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
};
HomeView.defulatProps = {
  kudoses: {},
  posts: {},
  persons: {},
};

export default connect(mapStatetoProps)(HomeView);
