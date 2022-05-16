import React from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import { DescrptionWrapper, Wrapper } from './KudosBadge.styles';
import icon from '../../../assets/img/kudos/RealtimeCollaboration.svg';
import { Text } from '../../atoms/Text/Text';
import { Heading } from '../../atoms/Heading/Heading';

const KudosBadge = () => {
  return (
    <Wrapper>
      <Icon big src={icon} />
      <DescrptionWrapper>
        <Text>Świetny współpracownik</Text>
        <Heading>Barbara Klimowicz</Heading>
      </DescrptionWrapper>
    </Wrapper>
  );
};

export default KudosBadge;
