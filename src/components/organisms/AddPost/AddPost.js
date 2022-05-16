import React from 'react';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Icon } from '../../atoms/Icon/Icon';
import { Text } from '../../atoms/Text/Text';
import { Wrapper } from './AddPost.styles';
import icon from '../../../assets/img/icons/agreement.svg';
import { Link } from 'react-router-dom';

const AddPost = () => {
  return (
    <Link to="/form">
    <Wrapper>
      <Avatar src="https://randomuser.me/api/portraits/men/15.jpg" />
      <Text addPost> Kliknij, aby dodać post</Text>
      <Icon addPost src={icon} />
    </Wrapper>
    </Link>
  );
};

export default AddPost;
