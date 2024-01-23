import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback, formSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector(formSelector);
    this._submitCallback = submitCallback;
  }

  _getInputValues() {
    const inputs = Array.from(this._formElement.querySelectorAll(".input"));
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const value = this._getInputValues();
      console.log(value);
      this._submitCallback(value);
      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  reset() {
    this._formElement.reset();
  }
}
