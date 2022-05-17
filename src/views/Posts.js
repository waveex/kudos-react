import React from "react";
import AddPost from "../components/organisms/AddPost/AddPost";
import Post from "../components/organisms/Post/Post";
import { Wrapper } from "./Posts.styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "../components/organisms/Modal/Modal";
import Forms from "./Forms";
import useModal from "../hooks/useModal";


const Posts = ({ posts, persons }) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const activePerson = persons.find((person) => person.isActive);
  return (
    <Wrapper>
      <AddPost
        onClick={handleOpenModal}
        persons={persons}
        activePerson={activePerson}
      />
      <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
        <Forms />
      </Modal>
      {posts.map(({ postId, date, authorId, avatar, description }) => (
        <Post
          key={postId}
          avatar={persons[authorId].img}
          name={persons[authorId].name}
          date={date}
          description={description}
          postId={postId}

          persons={persons}
        />
      ))}
    </Wrapper>
  );
};
Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      authorId: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    })
  ),
};
Posts.defulatProps = {
  posts: {},
  persons: {},
};
const mapStatetoProps = (state) => ({
  posts: state.postState,
  persons: state.personsState,
});
export default connect(mapStatetoProps)(Posts);
