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

  const disableButtons = () => {
    const saveButtonEdit = document.querySelector(editButtonSave);
    const saveButtonInclude = document.querySelector(addButtonSave);
    saveButtonEdit.setAttribute("disabled", true);
    saveButtonInclude.setAttribute("disabled", true);
    saveButtonEdit.classList.add(inactiveButtonSaveClass);
    saveButtonInclude.classList.add(inactiveButtonAddClass);
  };

  const enableButtons = () => {
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
