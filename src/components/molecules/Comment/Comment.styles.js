import styled from "styled-components";


export const StyledWrapper = styled.div`
display: flex;
  padding-top: 16px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.borderGray};
`;

export const IconsWrapper  = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
  background-color: ${({ theme }) => theme.white};
  border: ${({ theme }) => theme.border} ${({ theme }) => theme.borderGray};
  border-radius: ${({ theme }) => theme.rounded};
  width: 100%;
  height: 32px;
  padding: 6px 8px;
`;
