import "./App.css";

function App() {
  return (
    <section className="modal container">
      <button className="modal__button" id="open-modal">
        Open Modal
      </button>

      <div className="modal__container" id="modal-container">
        <div className="modal__content">
          <div className="modal__close close-modal" title="Close">
            <i className="bx bx-x"></i>
          </div>

          <img src="assets/img/star-trophy.png" alt="" class="modal__img" />

          <h1 className="modal__title">Good Job!</h1>
          <p className="modal__description">Click the button to close</p>

          <button className="modal__button modal__button-width">
            View status
          </button>

          <button className="modal__button-link close-modal">Close</button>
        </div>
      </div>
    </section>
  );
}

export default App;
