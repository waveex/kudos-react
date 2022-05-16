import React from 'react';
import Button from '../../atoms/Button/Button';
import Select from '../../atoms/Select/Select';
import { Wrapper } from './GroupSelect.styles';

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
              <Icon src={iconDepartment} />
              <Text select>Marketing</Text>
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
              <Icon src={iconDepartment} />
              <Text select>HR</Text>
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
