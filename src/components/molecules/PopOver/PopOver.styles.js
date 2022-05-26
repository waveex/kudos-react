import styled from 'styled-components';
export const StyledWrapper = styled.div`
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    max-width: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.3s all ease-in-out;
    right: 30px;
    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};

`