import styled, {css} from 'styled-components';

export const Input = styled.input`
  background-color: transparent;
  font-weight: ${({ theme }) => theme.normal};
  font-size: ${({ theme }) => theme.s};
  color: ${({ theme }) => theme.darkGray};
  opacity: 50%;
  max-width: 334px;
  width: 100%;
  height: 20px;
  border: none;
  flex: 1;
  ${props =>
    props.form &&
    css`
      width: 100%;
      font-weight: ${({ theme }) => theme.regular};
      font-size: ${({ theme }) => theme.small};
      opacity: 1;
    `};
`;
