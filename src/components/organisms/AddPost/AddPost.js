import React from "react";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { Icon } from "../../atoms/Icon/Icon";
import { Text } from "../../atoms/Text/Text";
import { Wrapper } from "./AddPost.styles";
import icon from "../../../assets/img/icons/agreement.svg";
import PropTypes from 'prop-types';
const AddPost = ({props, persons}) => {
  const activePerson = persons.find((person) => person.isActive);
  return (
    <Wrapper {...props}>
      <Avatar src={activePerson.img} />
      <Text addPost> Kliknij, aby dodać post</Text>
      <Icon addPost src={icon} />
    </Wrapper>
  );
};

AddPost.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
    }),
  ),
};
AddPost.defualtProps = {
  persons: [],
}

export default AddPost;
