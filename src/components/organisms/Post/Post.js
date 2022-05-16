import React from 'react';
import { Text } from '../../atoms/Text/Text';
import Header from '../../molecules/Header/Header';
import KudosBadge from '../../molecules/KudosBadge/KudosBadge';
import { Wrapper } from './Post.styles';
import PropTypes from 'prop-types';
import { Comment } from '../../molecules/Comment/Comment';
const Post = ({name, date, avatar, desciption}) => {
    return (
    <Wrapper >
    <Header name={name} date={date} avatar={avatar} />
    <Text>{desciption}</Text>
    <KudosBadge />
    <Comment avatar={avatar} />
    </Wrapper>
        );
}

Post.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    desciption: PropTypes.string,

}
export default Post;
