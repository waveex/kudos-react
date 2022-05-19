import styled from "styled-components";
export const StyledWrapper = styled.div`
  max-width: 532px;
  width: 100%;
  height: 193px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${({ theme }) => theme.border} ${({ theme }) => theme.grayBorder};
  border-radius: ${({ theme }) => theme.rounded};
  padding-left: 29px;
  &:hover{
    border : ${({theme}) => theme.border} ${({theme}) => theme.gold}
  }
`;

export const DescrptionWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
    flex: 1;
`
