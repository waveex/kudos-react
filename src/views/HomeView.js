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

export const mapStatetoProps = (state) => ({
  posts: state.postState,
  persons: state.personsState,
  kudoses: state.kudosesState,
});
const HomeView = ({ posts, persons, kudoses }) => {
  console.log(kudoses);
  const [postsList, setPostsList] = useState(posts);
  const onSubmit = (e) => {
    const newPost = {
      postId: 10,
      authorId: 1,
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      date: "3 dni temu",
      postDescription: "Wiech projektów przed nami.",
      likes: 23,
      kudos: {
        kudosId: 4,
        personId: 5,
      },
    };
    e.preventDefault;
    setPostsList([newPost, ...postsList]);
    handleCloseModal();
  };

  const activePerson = persons.find((person) => person.isActive);
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
