import "./App.css";

import { MdClear } from "react-icons/md";

function App() {
  const showModal = () => {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.classList.add("show-modal");
  };

  const hideModal = () => {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.classList.remove("show-modal");
  };

  return (
    <>
      <header>
        <h1>Responsive React Popup Modal</h1>
      </header>

      <section className="modal container">
        <button onClick={showModal} className="modal__button" id="open-modal">
          Show Modal
        </button>

        <div className="modal__container" id="modal-container">
          <div className="modal__content">
            <div
              onClick={hideModal}
              className="modal__close close-modal"
              title="Close"
            >
              <MdClear />
              {/* <img src="img/x.svg" alt="" clasName="close-icon" /> */}
            </div>

            <h1 className="modal__title"> Good Job! 🎉</h1>
            <p className="modal__description">Click the button to close</p>
            <img src="img/trophy.png" alt="" class="modal__img" />

            <button className="modal__button modal__button-width">
              View status
            </button>

            <button
              onClick={hideModal}
              className="modal__button-link close-modal"
            >
              Close
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
