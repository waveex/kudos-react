import { React, useState } from "react";
import { Icon } from "../../atoms/Icon/Icon";
import { OptionsWrapper, SocialWrapper, StyledWrapper } from "./Options.styles";
import heart from "../../../assets/img/icons/heart-solid.svg";
import comment from "../../../assets/img/icons/message-solid.svg";
import dots from "../../../assets/img/icons/ellipsis-vertical-solid.svg";
import PropTypes from "prop-types";
import icon from "../../../assets/img/kudos/RealtimeCollaboration.svg";
import { Text } from "../../atoms/Text/Text";
import { connect } from "react-redux";
import Button from "../../atoms/Button/Button";
import PopOver from "../PopOver/PopOver";
const Options = ({ likes, group, groups }) => {

  const [likesNumber, setLikesNumber] = useState(likes);
  const [isOpen, setIsVisible] = useState(false);
  const activeGroup = groups.find(
    (groupSelected) => groupSelected.id === group
  );

  const  toggleVisibilty = (e) => {
    e.preventDefualt
    setIsVisible(!isOpen)
    console.log(isOpen);
  }
  const groupName = activeGroup;

  const incrementLikes = () => {
    setLikesNumber(likesNumber + 1);
  };
  return (
    <StyledWrapper>
      <OptionsWrapper>
        <Icon src={icon} />
        <Text link>{groupName.name}</Text>
      </OptionsWrapper>
      <SocialWrapper>
      <Button options>
        <Icon small src={heart} onClick={incrementLikes} />
        </Button>

        <Text counter>{likesNumber}</Text>
        <Button options>
        <Icon small src={comment} />
        </Button>
        <Text counter>0</Text>

      </SocialWrapper>
      <Button more onClick={toggleVisibilty}>
      <Icon small src={dots} />
      </Button>
      <PopOver isVisible={isOpen}/>
    </StyledWrapper>
  );
};
Options.propTypes = {
  id: PropTypes.number,
  likesNumber: PropTypes.number,
  incrementLikes: PropTypes.func,
  toggleVisibilty: PropTypes.func,
  dots: PropTypes.string,
  isOpen: PropTypes.bool,
  comment: PropTypes.string

};
const mapStatetoProps = (state) => ({
  groups: state.groupState,
});

Options.defaultProps = {
  groups: {},
};
export default connect(mapStatetoProps, null)(Options);
