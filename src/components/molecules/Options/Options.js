import React from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import { OptionsWrapper, SocialWrapper, Wrapper } from './Options.styles';
import heart from '../../../assets/img/icons/heart-solid.svg'
import comment from '../../../assets/img/icons/message-solid.svg'
import dots from '../../../assets/img/icons/ellipsis-vertical-solid.svg'


const Options = () => {
    return (
        <Wrapper>
            <OptionsWrapper>
                <Icon src={icon}/>
                <text link>Marketing</text>
            </OptionsWrapper>
            <SocialWrapper>
                <Icon small src={heart}/>
                <Text counter>4</Text>
                <Icon small src={comment}/>
                <Text counter>0</Text>
            </SocialWrapper>
            <Icon small src={dots}/>
        </Wrapper>
    );
}

export default Options;
