import React from "react";
import { Text } from "../../atoms/Text/Text";
import Header from "../../molecules/Header/Header";
import KudosBadge from "../../molecules/KudosBadge/KudosBadge";
import { Wrapper } from "./Post.styles";
import PropTypes from "prop-types";
import { Comment } from "../../molecules/Comment/Comment";
import Options from "../../molecules/Options/Options";
const Post = ({ name, date, avatar, desciption, hearts, postId, persons }) => {
  const activePerson = persons.find((person) => person.isActive);
  return (
    <Wrapper>
      <Header name={name} date={date} avatar={avatar} />
      <Text>{desciption}</Text>
      <KudosBadge />
      <Options hearts={hearts} postId={postId} />
      <Comment avatar={activePerson.img} />
    </Wrapper>
  );
};

Post.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desciption: PropTypes.string,
  hearts: PropTypes.number,
  postId: PropTypes.number,
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    })
  ),
};
Post.defaultProps = {
  persons: [],
};
export default Post;
