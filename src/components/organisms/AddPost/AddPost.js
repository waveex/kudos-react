import React from 'react';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Icon } from '../../atoms/Icon/Icon';
import { Text } from '../../atoms/Text/Text';
import { Wrapper } from './AddPost.styles';
import icon from '../../../assets/img/icons/agreement.svg';

const AddPost = () => {
  return (
    <Wrapper>
      <Avatar src="https://randomuser.me/api/portraits/men/15.jpg" />
      <Text addPost> Kliknij, aby dodać post</Text>
      <Icon addPost src={icon} />
    </Wrapper>
  );
};

export default AddPost;
