import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  width: 100%;
  flex-direction: column;
p {
  font: normal normal 600 14px/21px Poppins;
letter-spacing: 0px;
color:  ${({ theme }) => theme.darkGray};
}
`;

