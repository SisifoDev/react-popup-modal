import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --hue: 240;
  --first-color: hsl(var(--hue), 16%, 18%);
  --first-color-alt: hsl(var(--hue), 16%, 12%);
  --title-color: hsl(var(--hue), 8%, 15%);
  --text-color: hsl(var(--hue), 8%, 35%);
  --body-color: hsl(var(--hue), 100%, 99%);
  --container-color: #fff;

  /*========== Font and typography ==========*/
  --body-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  --big-font-size: 1.5rem;
  --normal-font-size: .938rem;

  /*========== z index ==========*/
  --z-modal: 1000;

  

}

@media screen and (min-width: 968px) {
  :root {
    --big-font-size: 1.75rem;
    --normal-font-size: 1rem;
  }
}

/*=============== BASE ===============*/
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body,
button{
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
}

body{
  background-color: var(--body-color);
  color: var(--text-color);
  position: relative;
}

button{
  cursor: pointer;
  border: none;
  outline: none;
}

img{
  max-width: 100%;
  height: auto;
}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Modal className="modal container">
        <ModalButton id="open-modal">Open Modal</ModalButton>
        <ModalContainer id="modal-container">
          <ModalContent>
            <ModalClose title="Close">
              <span className="modal__close-text">X</span>
            </ModalClose>
            <ModalImg src="img/star-trophy.png" alt="Coup" />
            <h1 className="modal__title">Good Job!</h1>
            <p className="modal__description">Click the button to close</p>
            <button className="modal__button modal__button-width">
              View Status
            </button>
            <button className="modal_button-link">Close</button>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
}

const Modal = styled.section`
  background-color: var(--container-color);
  &.modal {
    height: 100vh;
    display: grid;
    place-items: center;
  }

  &.container {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsla(var(--hue), 18%, 75%, 0.8);
  width: 100%;
  height: 100%;
  display: grid;
  align-items: flex-end;
  overflow: hidden;
  transition: all 0.3s;
  z-index: var(--z-modal);
  /* visibility: hidden; */
  opacity: 0;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: var(--container-color);
  text-align: center;
  padding: 3rem 2rem 2rem;
  border-radius: 1rem 1rem 0 0;
  transition: all 0.3s;

  /*=== Effect 1 ===*/
  transform: translateY(10%);
`;

const ModalImg = styled.img`
  width: 150px;
  margin-bottom: 0.75rem;
`;

const ModalClose = styled.div`
  display: inline-flex;
  background-color: var(--first-color);
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1.5rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`;

const ModalButton = styled.button`
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  &:hover {
    background-color: var(--first-color-alt);
  }
`;
export default App;
