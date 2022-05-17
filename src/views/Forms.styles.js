import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  margin: 0 0 13px 0;
  width: ${({ theme }) => theme.width};
  height: 1015px;
  border: 1px solid ${({ theme}) => theme.gold}
`;

export const NotesWrapper = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
