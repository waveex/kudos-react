import React from 'react';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Date } from '../../atoms/Date/Date';
import { Icon } from '../../atoms/Icon/Icon';
import { Heading } from '../../atoms/Heading/Heading';
import { InfoWrapper, Wrapper } from './Header.styles';
import icon from '../../../assets/img/icons/agreement.svg'


const Header = ({avatar, name, date}) => {
    return (
      <div>
        <Wrapper>
          <Avatar src={avatar} />
          <InfoWrapper>
            <Heading>{name}</Heading>
            <Date>{date}</Date>
          </InfoWrapper>
          <Icon src={icon} />
        </Wrapper>
      </div>
    );
}

export default Header;
