import React from 'react';
import Button from '../../atoms/Button/Button';
import { StyledWrapper } from './PopOver.styles';

const TooltipMenu = ({isVisible}) => {
    return (
        <StyledWrapper isVisible={isVisible}>
            <Button toolTip>Edytuj</Button>
            <Button toolTip>Usuń</Button>
            <Button toolTip>Prześlij dalej</Button>
        </StyledWrapper>
    );
}

export default TooltipMenu;
