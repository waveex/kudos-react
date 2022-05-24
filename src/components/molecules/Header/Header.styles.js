import styled from "styled-components";
export const StyledWrapper = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  h2 {
    font: normal normal bold 16px/25px Poppins;
letter-spacing: 0px;
color:${({ theme }) => theme.black};
margin-block-start: 0;
    margin-block-end: 0;
  }
  p {
    font: normal normal normal 14px/21px Poppins;
letter-spacing: 0px;
color: ${({ theme }) => theme.gray};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  flex: 1;
  justify-content: flex-start;
    align-items: baseline;
`;