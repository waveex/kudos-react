import React from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import { OptionsWrapper, SocialWrapper, Wrapper } from './Options.styles';
import heart from '../../../assets/img/icons/heart-solid.svg'
import comment from '../../../assets/img/icons/message-solid.svg'
import dots from '../../../assets/img/icons/ellipsis-vertical-solid.svg'
import { connect } from 'react-redux';
import { addHeart } from '../../../actions/addAction';
import PropTypes from 'prop-types';
import icon from '../../../assets/img/kudos/RealtimeCollaboration.svg';
import { Text } from '../../atoms/Text/Text';

const Options = ({hearts , postId , addHeart}) => {

    return (
      <Wrapper>
        <OptionsWrapper>
          <Icon src={icon} />
          <Text link >Marketing</Text>
        </OptionsWrapper>
        <SocialWrapper>
          <Icon small src={heart} onClick={() => addHeart(postId)} />
          <Text counter>{hearts}</Text>
          <Icon small src={comment} />
          <Text counter>0</Text>
        </SocialWrapper>
        <Icon small src={dots} />
      </Wrapper>
    );
}
Options.propTypes = {
    postId: PropTypes.number,
    hearts: PropTypes.number,
    addHeart: PropTypes.func.isRequired,
  };


export default connect(null, { addHeart })(Options);