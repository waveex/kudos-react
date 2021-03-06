import styled from "styled-components";
export const StyledWrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 13px 0;
  width: 100%;
  max-width: 564px;
  height: 513px;
  background-color: ${({ theme }) => theme.white};
  border: ${({ theme }) => theme.border} ${({ theme }) => theme.borderGray};
  border-radius: ${({ theme }) => theme.rounded};

`;