
import styled, { css } from 'styled-components';
import ReactSelect from 'react-select';

const Select = styled(ReactSelect)`
  font-weight: ${({ theme }) => theme.normal};
  font-size: ${({ theme }) => theme.s};
  color: ${({ theme }) => theme.gold};
  width: 100%;
  width: 183px;
  max-width: 100%;
  border-color: ${({ theme }) => theme.lightGray} ;

  ${props =>
    props.multi &&
    css`
      width: 100%;
    `}
    ${props =>
    props.group &&
    css`
        option {
          background: red;
        }
    `}
`;

export default Select;