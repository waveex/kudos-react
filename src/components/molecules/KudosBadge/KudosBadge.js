import React from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import { DescrptionWrapper, StyledWrapper } from './KudosBadge.styles';
import { Text } from '../../atoms/Text/Text';
import { Heading } from '../../atoms/Heading/Heading';
import PropTypes from "prop-types";

const KudosBadge = ({kudosBadgeRecived:{img, title}, kudosReciverName}) => {
  return (
    <StyledWrapper>
      <Icon big src={`${img}`} />
      <DescrptionWrapper>
        <Text>{title}</Text>
        <Heading>{kudosReciverName}</Heading>
      </DescrptionWrapper>
    </StyledWrapper>
  );
};
KudosBadge.propTypes = {
 img: PropTypes.string,
 title: PropTypes.string,
 kudosReciverName: PropTypes.string
};


export default KudosBadge;
