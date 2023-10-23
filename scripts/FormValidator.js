export default class FormValidator {
  constructor(formElement, submitButton, config) {
    this.inputs = formElement
    this.submitButton = submitButton
    this.config = config
    this.inputList = Array.from(this.inputs.querySelectorAll('input'))
    this.messageSpan = Array.from(this.inputs.querySelectorAll("span"))
  }

  _showImputError(spanError, validatMessage) {
    spanError.classList.add("span-active")
    spanError.textContent = validatMessage;
}

  _hideInputError = (spanError) => {
    spanError.classList.remove("span-active")
  };

  _checkInputValidity(inputElement) {
    const validMessage = inputElement.validity.valid
    if (!validMessage) {
      inputElement.classList.add(this.config.errorClass)
    } else {
      inputElement.classList.remove(this.config.errorClass)
    }
  }
  
  _toggleButtonState() {
    const isFormValid = this.inputList.every((inputElement) => inputElement.validity.valid,);
    if (isFormValid) {
      this.submitButton.removeAttribute('disabled');
      this.submitButton.classList.remove(this.config.buttonErrorClass);
    } else {
      this.submitButton.setAttribute('disabled', true);
      this.submitButton.classList.add(this.config.buttonErrorClass);
    }
  }
  _enableValidation() {
    this.inputList.forEach((elementInput) => {
      console.log(elementInput)
      elementInput.addEventListener("input", () => {
        this._toggleButtonState()
        this._showImputError(elementInput.nextElementSibling, elementInput.validationMessage)
        this._hideInputError(elementInput.nextElementSibling)
        this._checkInputValidity(elementInput)
      })
    })
  }
}








/*
formElement = é os elementos dos formulários, no caso, os inputs
submitButton = botões submit
config =  configuração das mensagens















export default class FormValidator {
  constructor(formSelection, listOfClasses) {
    this._formSelection = document.querySelector(formSelection);
    this._input = Array.from(this._formSelection.querySelectorAll(listOfClasses.formInput));
    this._listOfClasses = listOfClasses;
  }

  showImputError(formElement, element, validationMessage) {
    const messageSpan = formElement.querySelector(`.span-${element.name}-message`);
    messageSpan.textContent = validationMessage;
}

  _hideInputError = (formElement, element) => {
    const messageSpan = formElement.querySelector(`.span-${element.name}-message`);
    messageSpan.textContent = "";
  };

  _checkInputValidity(formElement, element) {
    if (!element.validity.valid) {
      this._showInputError(formElement, element, element.validationMessage);
    } else {
      this._hideInputError(formElement, element);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((element) => {
      return !element.validity.valid;
    });
  }

  _toggleButtonState(inputList, saveButtonEdit, saveButtonInclude) {
    if (this._hasInvalidInput(inputList)) {
      saveButtonEdit.classList.add(editButtonSave);
      saveButtonInclude.classList.add(addButtonSave);
      saveButtonEdit.setAttribute("disabled", true);
    } else {
      saveButtonEdit.classList.remove("button_inactive");
      saveButtonEdit.removeAttribute("disabled");
      saveButtonInclude.classList.remove("button_inactive");
      saveButtonInclude.removeAttribute("disabled");
    }
  }

  enableValidation() {
    this._formSelection.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const saveButtonEdit = this._formSelection.querySelector(this._listOfClasses.submitButtonSelector);
    const saveButtonInclude = this._formSelection.querySelector(this._listOfClasses.submitButtonSelector);

    this._toggleButtonState(this._input, saveButtonInclude, saveButtonEdit, this._listOfClasses);

    this._input.forEach((element) => {
      element.addEventListener("input", () => {
        this._checkInputValidity(this._formSelection, element);
        this._toggleButtonState(this._input, saveButtonEdit, saveButtonInclude);
      });
    });
    console.log(this);
  }
}












/*

const popup = Array.from(document.querySelectorAll(".popup"));
popup.forEach((container) => {
  container.addEventListener("click", (evt) => {
    evt.target.classList.remove("popup_opened");
  });
});
*/












































/*
export default class FormValidator {
    construto(config, name) {
        this.config = config;
        this.name = name;
    }

    const enableValidation = ({
      classToAddInput,
      editButtonSave,
      addButtonSave,
      inactiveButtonSaveClass,
      inactiveButtonAddClass,
    }) => {
      const inputFieldsValidation = (input) => {
      input.addEventListener('input', function (event) {
      const element = event.target;
      const messageSpan = document.querySelector(`.span-${element.name}-message`);
      if (!element.validity.valid) {
        input.classList.add(classToAddInput);
        messageSpan.textContent = element.validationMessage;
      } else {
        input.classList.remove(classToAddInput);
        messageSpan.textContent = '';
      }
      });
    };
    
     disableButtons() {
        const saveButtonEdit = document.querySelector(editButtonSave);
        const saveButtonInclude = document.querySelector(addButtonSave);
        saveButtonEdit.setAttribute("disabled", true);
        saveButtonInclude.setAttribute("disabled", true);
        saveButtonEdit.classList.add(inactiveButtonSaveClass);
        saveButtonInclude.classList.add(inactiveButtonAddClass);
      };
    
      enableButtons() {
        const saveButtonEdit = document.querySelector(editButtonSave);
        const saveButtonInclude = document.querySelector(addButtonSave);
        saveButtonEdit.removeAttribute("disabled");
        saveButtonInclude.removeAttribute("disabled");
        saveButtonEdit.classList.remove(inactiveButtonSaveClass);
        saveButtonInclude.classList.remove(inactiveButtonAddClass);
      };
    
      const isValidForm = (inputsArray) => inputsArray.every((input) => input.validity.valid);
      const allForms = Array.from(document.forms);
    
    
    allForms.forEach(form => {
      const inputs = Array.from(form.elements);
    
      inputs.forEach((element) => {
        inputFieldsValidation(element);
        element.addEventListener("input", function () {
          if (isValidForm(inputs)) {
            enableButtons();
          } else {
            disableButtons();
          }
        });
      });
    });
    }
    
    enableValidation({
      messageSelector: '.input__elemente-message',
      formName: 'form',
      classToAddInput: 'input__error',
      editButtonSave: ".button-save",
      addButtonSave: ".button-create",
      inactiveButtonSaveClass: "button-edit-inactive",
      inactiveButtonAddClass: "button-add-inactive",
    });
    
}
*/