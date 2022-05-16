import React from 'react';
import { Heading } from '../../atoms/Heading/Heading';
import { Icon } from '../../atoms/Icon/Icon';
import { Text } from '../../atoms/Text/Text';
import { DescriptionWrapper, Wrapper } from './AddKudoForm.styles';
import PropTypes from 'prop-types';

const AddKudoForm = ({img, title, description}) => {
    return (
        <Wrapper>
            <Icon kudos src={`${img}`}>
                <DescriptionWrapper>
                    <Text kudos>
                    {title}
                    </Text>
                    <Heading kudo>
                    {description}
                    </Heading>
                </DescriptionWrapper>
            </Icon>
        </Wrapper>
        );
}
AddKudoForm.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string  };
export default AddKudoForm;
