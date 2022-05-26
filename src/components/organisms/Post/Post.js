import React from "react";
import { Text } from "../../atoms/Text/Text";
import Header from "../../molecules/Header/Header";
import KudosBadge from "../../molecules/KudosBadge/KudosBadge";
import { StyledWrapper } from "./Post.styles";
import PropTypes from "prop-types";
import { Comment } from "../../molecules/Comment/Comment";
import Options from "../../molecules/Options/Options";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/pl'


const Post = ({
  postId,
  authorId,
  avatar,
  date,
  likes,
  kudos,
  persons,
  kudoses,
  postDescription,
  group
}) => {
  const author = persons.find((person) => person.id === authorId);
  const activePerson = persons.find((person) => person.isActive);
  const kudosReciver = persons.find((person) => person.id === kudos.personId);
  const kudosReciverName = kudosReciver.name;
  const kudosBadgeRecived = kudoses.find((kudo) => kudo.id === kudos.kudosId);
  dayjs.extend(utc);
  dayjs.extend(relativeTime);

 const timeSincePosted = dayjs(date).locale('pl').fromNow(true) ;
  return (
    <StyledWrapper>
      <Header name={author.name} date={timeSincePosted} avatar={avatar} />
      <Text>{postDescription}</Text>
      <KudosBadge
        kudosBadgeRecived={kudosBadgeRecived}
        kudosReciverName={kudosReciverName}
      />
      <Options likes={likes} group={group} />
      <Comment avatar={activePerson.img} />
    </StyledWrapper>
  );
};

Post.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  desciption: PropTypes.string,
  hearts: PropTypes.number,
  postId: PropTypes.number,
  kudos: PropTypes.objectOf(PropTypes.number),
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
};
Post.defaultProps = {
  persons: [],
  kudoses: [],
};
export default Post;
