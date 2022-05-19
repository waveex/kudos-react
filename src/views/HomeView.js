import React from "react";
import AddPost from "../components/organisms/AddPost/AddPost";
import Post from "../components/organisms/Post/Post";
import { StyledWrapper } from "./HomeView.styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "../components/organisms/Modal/Modal";
import AddPostForm from "./AddPostForm";
import useModal from "../hooks/useModal";
import PostsList from "../components/organisms/PostsList/PostsList";

const HomeView = ({ posts, persons, kudoses }) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  return (
    <StyledWrapper>
      <AddPost onClick={handleOpenModal} persons={persons} />
      <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
        <AddPostForm />
      </Modal>
      <PostsList posts={posts} persons={persons} kudoses={kudoses} />
      {/* {posts.map(
        ({ postId, date, authorId, description, kudos, likes, img }) => (
          <Post
            key={postId}
            name={name}
            avatar={img}
            date={date}
            description={description}
            postId={postId}
            kudos={kudos}
            kudoses={kudoses}
            persons={persons}
            likes={likes}
            posts={posts}
          />
        )
      )} */}
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
const mapStatetoProps = (state) => ({
  posts: state.postState,
  persons: state.personsState,
  kudoses: state.kudosesState,
});
export default connect(mapStatetoProps)(HomeView);
