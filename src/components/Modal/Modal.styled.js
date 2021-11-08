import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1200;
  backdrop-filter: blur(3px);
`

export const StyledModal = styled.div`
position: relative;
  width: 380px;
  height: 194px;
  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 30px;
`

export const TextModal = styled.p`
  margin-top: 60px;
  text-align: center;
  font-size: 14px;
`
export const ButtonContainer = styled.div`
  margin: 20px auto;
  max-width: 265px;
  display: flex;
  justify-content: space-between;
`
  
export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover > svg > path {
    stroke: var(--black-text-color);
  }
`