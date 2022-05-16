import React from 'react';
import { Wrapper } from './FormHeader.styles';
import icon from '../../../assets/img/icons/agreement-purple.svg'
import { Heading } from '../../atoms/Heading/Heading';
import { Link } from 'react-router-dom';
import { Icon } from '../../atoms/Icon/Icon';
import close from '../../../assets/img/icons/close.svg'


const FormHeader = () => {
    return (
       <Wrapper>
           <Icon src={icon} />
           <Heading form>Utwórz kudos</Heading>
           <Link to="/">
           <Icon form src={close} />
           </Link>
       </Wrapper>
    );
}

export default FormHeader;
