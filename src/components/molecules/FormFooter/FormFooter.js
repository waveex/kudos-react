import React from 'react';
import Button from '../../atoms/Button/Button';
import { Text } from '../../atoms/Text/Text';
import GroupSelect from '../GroupSelect/GroupSelect';
import { GroupSelcetionWrapper, StyledWrapper } from './FormFooter.styles';

const FormFooter = ({ control}) => {
    return (
        <StyledWrapper>
        <GroupSelcetionWrapper>
            <Text >Wybierz grupę</Text>
            <GroupSelect control={control} />
            </GroupSelcetionWrapper>
            <Button onClick={()=> console.log("dupa")}> Opublikuj </Button>
        </StyledWrapper>
    );
}

export default FormFooter;
