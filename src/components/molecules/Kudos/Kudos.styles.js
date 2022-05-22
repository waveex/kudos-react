import styled from 'styled-components';

export const StyledWrapper = styled.div`
display: flex;
height: 80px;
width: 100%;
justify-content: space-between;
border: 1px solid ${({theme}) => theme.gold};
padding-left: 29px;
align-items: center;
margin-top: 16px;
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  flex: 1;
`;
