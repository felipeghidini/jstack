import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 448px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

  strong {
    font-size: 24px;
  }

    button {
      display: flex;
      border: 0;
      background: transparent;
    }
  }

  status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }
  }

`;
