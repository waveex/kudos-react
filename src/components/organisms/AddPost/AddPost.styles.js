import styled from "styled-components";
export const Wrapper = styled.button`
  cursor: pointer;
  display: flex;
  padding: 16px;
  margin: 0;
  width: 564px;
  height: 56px;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border: ${({ theme }) => theme.border} ${({ theme }) => theme.grayBorder};
  border-radius: ${({ theme }) => theme.rounded};

  &:hover {
    border: 1px solid ${({ theme}) => theme.gold}
  }
`;