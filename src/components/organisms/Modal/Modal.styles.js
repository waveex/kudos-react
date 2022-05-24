import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 33px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  opacity: 1;
  transition: 0.3s all ease-in-out;
  width: 100%;
  max-width: 564px;
  &:focus {
    outline: none;
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 2000ms ease-in-out;
    overflow: auto;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}
`;
