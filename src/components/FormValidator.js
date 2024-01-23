export default class FormValidator {
  constructor(formElement, submitButton, config) {
    this.inputs = formElement;
    this.submitButton = submitButton;
    this.config = config;
    this.inputList = Array.from(this.inputs.querySelectorAll("input"));
    this.messageSpan = Array.from(this.inputs.querySelectorAll("span"));
  }

  _showImputError(spanError, validatMessage) {
    spanError.classList.add("span-active");
    spanError.textContent = validatMessage;
  }

  _hideInputError = (spanError) => {
    spanError.classList.remove("span-active");
  };

  _checkInputValidity(inputElement) {
    const validMessage = inputElement.validity.valid;
    if (!validMessage) {
      inputElement.classList.add(this.config.errorClass);
    } else {
      inputElement.classList.remove(this.config.errorClass);
    }
  }

  _toggleButtonState() {
    const isFormValid = this.inputList.every(
      (inputElement) => inputElement.validity.valid
    );
    if (isFormValid) {
      this.submitButton.removeAttribute("disabled");
      this.submitButton.classList.remove(this.config.buttonErrorClass);
    } else {
      this.submitButton.setAttribute("disabled", true);
      this.submitButton.classList.add(this.config.buttonErrorClass);
    }
  }
  _enableValidation() {
    this.inputList.forEach((elementInput) => {
      elementInput.addEventListener("input", () => {
        this._toggleButtonState();
        this._showImputError(
          elementInput.nextElementSibling,
          elementInput.validationMessage
        );
        this._hideInputError(elementInput.nextElementSibling);
        this._checkInputValidity(elementInput);
      });
    });
  }
}