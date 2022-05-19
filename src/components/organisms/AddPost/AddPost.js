import React from "react";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { Icon } from "../../atoms/Icon/Icon";
import { Text } from "../../atoms/Text/Text";
import { StyledWrapper } from "./AddPost.styles";
import icon from "../../../assets/img/icons/agreement.svg";
import PropTypes from "prop-types";
const AddPost = ({ persons ,...props }) => {
  const activePerson = persons.find((person) => person.isActive);

  return (
    <StyledWrapper {...props}>
      <Avatar src={activePerson.img} />
      <Text addPost> Kliknij, aby dodać post</Text>
      <Icon addPost src={icon} />
    </StyledWrapper>
  );
};

AddPost.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
};
AddPost.defualtProps = {
  persons: [],
};

export default AddPost;
