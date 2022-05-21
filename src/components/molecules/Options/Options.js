import { React, useState } from "react";
import { Icon } from "../../atoms/Icon/Icon";
import { OptionsWrapper, SocialWrapper, StyledWrapper } from "./Options.styles";
import heart from "../../../assets/img/icons/heart-solid.svg";
import comment from "../../../assets/img/icons/message-solid.svg";
import dots from "../../../assets/img/icons/ellipsis-vertical-solid.svg";
import { connect } from "react-redux";
import { addHeart } from "../../../actions/addAction";
import PropTypes from "prop-types";
import icon from "../../../assets/img/kudos/RealtimeCollaboration.svg";
import { Text } from "../../atoms/Text/Text";

const Options = ({ likes }) => {
  const [likesNumber, setLikesNumber] = useState(likes);
  const incrementLikes = () => {
    setLikesNumber(likesNumber + 1);
  };
  return (
    <StyledWrapper>
      <OptionsWrapper>
        <Icon src={icon} />
        <Text link>Marketing</Text>
      </OptionsWrapper>
      <SocialWrapper>
        <Icon small src={heart} onClick={incrementLikes} />
        <Text counter>{likesNumber}</Text>
        <Icon small src={comment} />
        <Text counter>0</Text>
      </SocialWrapper>
      <Icon small src={dots} />
    </StyledWrapper>
  );
};
Options.propTypes = {
  id: PropTypes.number,
  likesNumber: PropTypes.number,
};

export default (Options);
