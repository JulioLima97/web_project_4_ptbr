export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
    }
  
    open() {
      this._popup.classList.add("popup_opened");
      document.addEventListener("keydown", this._handleEscClose);
    }
  
    close() {
      this._popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleEscClose);
    }
  
    _handleEscClose(evt) {
      if (evt.key === "Escape") {
        const popup = Array.from(document.querySelectorAll(".popup"));
        popup.forEach((element) => {
          element.classList.remove("popup_opened");
        });
      }
    }
  
    setEventListeners() {
      const closeIcon = this._popup.querySelector(".button-close-popup");
      this._popup.addEventListener("click", (evt) => {
        if (evt.target.classList.contains("popup")) {
          this.close()
        }
      })
      closeIcon.addEventListener("click", () => this.close());
      document.addEventListener("keydown", this._handleEscClose);
    }
  }