import styled, { css } from 'styled-components';

export const Icon = styled.img`
  height: 24px;
  width: 24px;
  padding: 3px;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  ${props =>
    props.form &&
    css`
      padding: 6px;
    `};
  ${props =>
    props.kudos &&
    css`
      width: 75px;
      height: 75px;
    `};
  ${(props) =>
    props.big &&
    css`
      background-color: transparent;
      height: 100px;
      width: 124px;
      padding: 0;
    `};
  ${(props) =>
    props.small &&
    css`
      background-color: transparent;
      height: 14px;
      width: 14px;
      padding: 1px;
      border-radius: 0;
    `};
  ${(props) =>
    props.comment &&
    css`
      background-color: transparent;
      height: 24px;
      width: 24px;
      padding: 5px;
      border-radius: 0;
    `};
  ${(props) =>
    props.addPost &&
    css`
      background-color: transparent;
    `};
`;


