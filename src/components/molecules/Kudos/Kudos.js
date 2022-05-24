import React from 'react';
import { Heading } from '../../atoms/Heading/Heading';
import { Icon } from '../../atoms/Icon/Icon';
import { Text } from '../../atoms/Text/Text';
import { DescriptionWrapper, Input, StyledWrapper } from './Kudos.styles';
import PropTypes from 'prop-types';


const Kudos = ({img, title, description, id, onChange}) => {
    return (
       <>
            <Input id={id}  type="radio" onChange={onChange}  name="kudos" />
             <StyledWrapper htmlFor={id}>
            <Icon kudos src={`${img}`} />
                <DescriptionWrapper >
                    <Text kudos>
                    {title}
                    </Text>
                    <Heading kudo>
                    {description}
                    </Heading>
                </DescriptionWrapper>
        </StyledWrapper>
        </>
        );
}
Kudos.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string  };
export default Kudos;
