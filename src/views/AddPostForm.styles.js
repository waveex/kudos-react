import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  max-width: 504px;
  width: 100%;
  margin: 0 0 13px 0;
  border: 1px solid ${({ theme}) => theme.gold}

`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
