import styled from "styled-components";
export const StyledWrapper = styled.button`
  cursor: pointer;
  display: flex;
  padding: 16px;
  margin: 0;
  width: 100%;
  height: 56px;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border: ${({ theme }) => theme.border} ${({ theme }) => theme.borderGray};
  border-radius: ${({ theme }) => theme.rounded};

  &:hover {
    border: 1px solid ${({ theme }) => theme.gold};
  }
  p {
    font: normal normal normal 14px/22px Poppins;
    letter-spacing: 0px;
    color: ${({ theme }) => theme.gray};
  }
`;
