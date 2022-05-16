import React from 'react';
import propTypes from 'eslint-plugin-react/lib/rules/prop-types';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Icon } from '../../atoms/Icon/Icon';
import { IconsWrapper, Wrapper } from './Comment.styles';
import gif from '../../../assets/img/icons/gif.svg'
import emotikon from '../../../assets/img/icons/emotikon.svg'
import attachment from '../../../assets/img/icons/attachment-icon.svg'

export const Comment = ({avatar}) => {
    return (
       <Wrapper>
           <Avatar src={avatar}/>
           <IconsWrapper>
               <Icon comment src={gif}/>
               <Icon comment src={emotikon}/>
               <Icon comment src={attachment}/>
           </IconsWrapper>
       </Wrapper>
    );
}



