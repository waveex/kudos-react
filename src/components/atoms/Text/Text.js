import styled, {css} from 'styled-components';

export const Text = styled.p`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.normal};
  font-size: ${({ theme }) => theme.s};
  margin: 38px 0 24px 0;
  ${props =>
    props.big &&
    css`
      font-size: ${({ theme }) => theme.m};
      margin: 0;
    `};
  ${props =>
    props.link &&
    css`
      color: ${({ theme }) => theme.gold};
      font-size: ${({ theme }) => theme.xs};
      font-weight: ${({ theme }) => theme.semiBold};
      margin: 0;
      margin-left: 8px;
    `};
  ${props =>
    props.counter &&
    css`
      color: ${({ theme }) => theme.gold};
      font-size: ${({ theme }) => theme.xs};
      font-weight: ${({ theme }) => theme.normal};
      margin: 0 8px 0 5.45px;
    `};
  ${props =>
    props.addPost &&
    css`
      color: ${({ theme }) => theme.gray};
      font-size: ${({ theme }) => theme.s};
      margin: 0 0 0 8px;
      text-align: left;
      width: 100%;
    `};
`;

