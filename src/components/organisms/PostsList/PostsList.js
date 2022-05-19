import React from "react";
import Post from "../Post/Post";
import { StyledWrapper } from "./PostsList.styles";

const PostsList = ({ posts, persons, kudoses }) => {
  return (
    <StyledWrapper>
      {posts.map((posts) => (
            <Post
                posts={posts}
                key={posts.postId}
                persons={persons}
                kudoses={kudoses}
            />
      ))}
    </StyledWrapper>
  );
};

export default PostsList;
