import React from 'react';
import Button from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';
import Select from '../../atoms/Select/Select';
import { OptionWrapper, Wrapper } from './GroupSelect.styles';
import iconCity from '../../../assets/img/icons/city-solid.svg'
import { Text } from '../../atoms/Text/Text';

const GroupSelect = () => {
    const options = [
        {
          value: 'Białystok',
          label: (
            <OptionWrapper>
              <Icon src={iconCity} />
              <Text select>Białystok</Text>
            </OptionWrapper>
          ),
        },
        {
          value: 'Marketing',
          label: (
            <OptionWrapper>
              <Icon src={iconCity} />
              <Text select>Bydgoszcz</Text>
            </OptionWrapper>
          ),
        },
        {
          value: 'Warszawa',
          label: (
            <OptionWrapper>
              <Icon src={iconCity} />
              <Text select>Warszawa</Text>
            </OptionWrapper>
          ),
        },
        {
          value: 'HR',
          label: (
            <OptionWrapper>
              <Icon src={iconCity} />
              <Text select>Poznań</Text>
            </OptionWrapper>
          ),
        },
      ];
    return (
     <Wrapper>
        <Select options={options} />
        <Button>Opublikuj</Button>
     </Wrapper>
    );
}

export default GroupSelect;
