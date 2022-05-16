import React from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import {  EmoticonsWrapper, InputWrapper, Wrapper } from './PostForm.styles';
import gif from '../../../assets/img/icons/gif.svg'
import emotikon from '../../../assets/img/icons/emotikon.svg'
import attachment from '../../../assets/img/icons/attachment-icon.svg'

const PostForm = () => {
    return (
            <Wrapper>
                <InputWrapper>
                <EmoticonsWrapper>
                    <Icon comment src={gif} />
                    <Icon comment src={emotikon} />
                    <Icon comment src={attachment} />
                    </EmoticonsWrapper>
                </InputWrapper>
            </Wrapper>
    );
}

export default PostForm;
