import React from 'react';
import AddPost from '../components/organisms/AddPost/AddPost';
import Post from '../components/organisms/Post/Post';
import { Wrapper } from './Posts.styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Posts = ({ posts }) => {
  return (
    <Wrapper>
      <AddPost />
      {posts.map(({ name, date, id, avatar, description, hearts }) => (
        <Post key={id} avatar={avatar} name={name} date={date} description={description} id={id} hearts={hearts}/>
      ))}
    </Wrapper>
  );
};
Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};
Posts.defulatProps = {
  posts: {},
};
const mapStatetoProps = state => ({
  posts: state.postState,
})
export default connect(mapStatetoProps)(Posts);
