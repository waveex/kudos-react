import styled from 'styled-components';

export const StyledWrapper = styled.label`
  padding: 20px;
display: flex;
height: 80px;
width: 100%;
justify-content: space-between;
border: 1px solid ${({theme}) => theme.gray};
padding-left: 29px;
align-items: center;
margin-top: 16px;
&:hover {
    background-color: ${({ theme }) => theme.lightGray};
  }
img {
  max-width: 70px;
  width: 100%;
}
h2{
  font: normal normal 600 14px/21px Poppins;
letter-spacing: 0px;
color: #616161;
}
p{
  font: normal normal normal 14px/21px Poppins;
letter-spacing: 0px;
color: #616161;
}
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  flex: 1;
`;
export const Input = styled.input`
  display: none;
  transition: 0.3s all ease-in-out;
  &:checked + ${StyledWrapper} {
    background-color: ${({ theme }) => theme.lightGray};
    border: 1px solid #a8996f;
  }
`;