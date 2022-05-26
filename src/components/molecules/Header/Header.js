import React from 'react';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Date } from '../../atoms/Date/Date';
import { Icon } from '../../atoms/Icon/Icon';
import { Heading } from '../../atoms/Heading/Heading';
import { InfoWrapper, StyledWrapper } from './Header.styles';
import icon from '../../../assets/img/icons/agreement.svg'
import PropTypes from "prop-types";


const Header = ({avatar, name, date}) => {
    return (
      <div>
        <StyledWrapper>
          <Avatar src={avatar} />
          <InfoWrapper>
            <Heading>{name}</Heading>
            <Date>{date}</Date>
          </InfoWrapper>
          <Icon src={icon} />
        </StyledWrapper>
      </div>
    );
}
Header.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string
};
export default Header;
