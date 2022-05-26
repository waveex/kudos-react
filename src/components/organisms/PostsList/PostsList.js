import React, { useEffect } from "react";
import Post from "../Post/Post";
import { StyledWrapper } from "./PostsList.styles";

const PostsList = ({ persons, kudoses, postsList }) => {
  console.log(postsList);
  return (
    <StyledWrapper>
      {postsList.map((singlePost) => (
        <Post
          key={singlePost.postId}
          singlePost={singlePost}
          persons={persons}
          kudoses={kudoses}
          postId={singlePost.postId}
          authorId={singlePost.authorId}
          avatar={singlePost.avatar}
          date={singlePost.date}
          likes={singlePost.likes}
          kudos={singlePost.kudos}
          postDescription={singlePost.postDescription}
          group={singlePost.groupId}
        />
      ))}
    </StyledWrapper>
  );
};

export default PostsList;
