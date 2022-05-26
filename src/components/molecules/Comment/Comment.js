import React from 'react';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Icon } from '../../atoms/Icon/Icon';
import { IconsWrapper, StyledWrapper } from './Comment.styles';
import gif from '../../../assets/img/icons/gif.svg'
import emotikon from '../../../assets/img/icons/emotikon.svg'
import attachment from '../../../assets/img/icons/attachment-icon.svg'
import Button from '../../atoms/Button/Button';

export const Comment = ({avatar}) => {
    return (
       <StyledWrapper>
           <Avatar src={avatar}/>
           <IconsWrapper>
           <Button options social>
               <Icon comment src={gif}/>
               </Button>
               <Button   options social>
               <Icon comment src={emotikon}/>
               </Button>
               <Button  options social>
               <Icon comment src={attachment}/>
               </Button>
           </IconsWrapper>
       </StyledWrapper>
    );
}



