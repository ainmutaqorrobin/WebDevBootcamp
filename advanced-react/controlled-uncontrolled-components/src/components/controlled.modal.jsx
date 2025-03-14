import { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;

function ControlledModal({ children, display, onClose }) {
  return (
    <>
      {display && (
        <ModalBackground onClick={onClose}>
          {/* prevent confuse onClick event add event.stopPropagation()*/}
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>Close</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
}

export default ControlledModal;
