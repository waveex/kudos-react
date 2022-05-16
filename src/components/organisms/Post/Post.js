import React from 'react';
import { Text } from '../../atoms/Text/Text';
import Header from '../../molecules/Header/Header';
import KudosBadge from '../../molecules/KudosBadge/KudosBadge';
import { Wrapper } from './Post.styles';
import PropTypes from 'prop-types';
import { Comment } from '../../molecules/Comment/Comment';
import Options from '../../molecules/Options/Options';

const Post = ({name, date, avatar, desciption, hearts, id}) => {
    return (
    <Wrapper >
    <Header name={name} date={date} avatar={avatar} />
    <Text>{desciption}</Text>
    <KudosBadge />
    <Options hearts={ hearts} id={id}/>
    <Comment avatar={avatar} />
    </Wrapper>
        );
}

Post.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desciption: PropTypes.string,
    hearts: PropTypes.number,
    id: PropTypes.number

}
export default Post;
