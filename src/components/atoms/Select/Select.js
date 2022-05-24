
import styled, { css } from 'styled-components';
import ReactSelect from 'react-select';

const Select = styled(ReactSelect)`
  font-weight: ${({ theme }) => theme.normal};
  font-size: ${({ theme }) => theme.s};
  color: ${({ theme }) => theme.darkGray};
  width: 100%;
  width: 183px;
  max-width: 100%;
  ${props =>
    props.multi &&
    css`
      width: 100%;
    `}
`;

export default Select;