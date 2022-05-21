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
  kudos: PropTypes.number,
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
      isActive: PropTypes.bool,
    }),
  ),
  kudoses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
};

KudosBadge.defaultProps = {
  persons: {},
  kudoses: {},
};
export default KudosBadge;
