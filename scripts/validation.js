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
  const messageSpan = document.querySelector(`.span__${element.name}-message`);
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

  const allForms = Array.from(document.forms);
  for (const form of allForms) {
    const inputs = Array.from(form.elements);
    const isValidForm = () => inputs.every((input) => input.validity.valid);

    inputs.forEach((element) => {
      inputFieldsValidation(element);
      element.addEventListener("input", function () {
        console.log(isValidForm())
        if (isValidForm()) {
          enableButtons();
        } else {
          disableButtons();
        }
      });
    });
  };
};

enableValidation({
  messageSelector: '.input__elemente-message',
  formName: 'form',
  classToAddInput: 'input__error',
  editButtonSave: ".button-save",
  addButtonSave: ".button-create",
  inactiveButtonSaveClass: "button_edit-inactive",
  inactiveButtonAddClass: "button_add-inactive",
});
