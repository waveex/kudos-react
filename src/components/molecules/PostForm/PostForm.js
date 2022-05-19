import React from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import {  EmoticonsWrapper, InputWrapper, StyledWrapper } from './PostForm.styles';
import gif from '../../../assets/img/icons/gif.svg'
import emotikon from '../../../assets/img/icons/emotikon.svg'
import attachment from '../../../assets/img/icons/attachment-icon.svg'

const PostForm = () => {
    return (
            <StyledWrapper>
                <InputWrapper>
                <EmoticonsWrapper>
                    <Icon comment src={gif} />
                    <Icon comment src={emotikon} />
                    <Icon comment src={attachment} />
                    </EmoticonsWrapper>
                </InputWrapper>
            </StyledWrapper>
    );
}

export default PostForm;
