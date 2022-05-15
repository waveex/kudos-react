import styled, { css } from 'styled-components';

export const Heading = styled.h2`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.medium};
  ${props =>
    props.big &&
    css`
      font-size: ${({ theme }) => theme.large};
    `};
`;
