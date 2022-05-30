import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.s};
  font-weight: ${({ theme }) => theme.semibold};
  height: 36px;
  width: 120px;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  transition: 0.3s all ease-in-out;
  :hover {
    background-color: ${({ theme }) => theme.gold};
  }
  ${(props) =>
    props.options &&
    css`
      background: transparent;
      width: ${({ theme }) => theme.s};
      height: ${({ theme }) => theme.s};
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        box-shadow: 0px 0px 7px 0px rgb(168 153 111);

      }

    `}
  ${(props) =>
    props.more &&
    css`
      background: ${({ theme }) => theme.gray};
      width: ${({ theme }) => theme.s};
      height: ${({ theme }) => theme.l};
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        background-color: ${({ theme }) => theme.white};
      }
    `}
    ${(props) =>
    props.social &&
    css`
    width: ${({ theme }) => theme.l};
      height: ${({ theme }) => theme.l};
        margin: 0 5px;
      :hover {
        filter: invert(2) sepia(5) saturate(2) hue-rotate(35deg);
      }
    `}
    ${(props) =>
    props.toolTip &&
    css`
      background: ${({ theme }) => theme.lightGray};
      width: 100%;
      border-radius: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      :hover {
        background: ${({ theme }) => theme.gold};
      }
    `}
`;

export default Button;
