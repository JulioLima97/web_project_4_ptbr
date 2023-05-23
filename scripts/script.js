const editButton = document.querySelector('.button-edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.button-close-popup');
const saveButton = document.querySelector('.button-save');
const inputName = document.querySelector('.input-name');
const inputProfission = document.querySelector('.input-description');
const perfilName = document.querySelector('.perfil__name');
const perfilProfission = document.querySelector('.perfil__profission');



editButton.addEventListener('click', addPopupClassToDisplay)
  function addPopupClassToDisplay() {
    popup.classList.add('popup_opened');
}

closeButton.addEventListener('click', removeDisplayFlexPopupClass)
  function removeDisplayFlexPopupClass() {
    popup.classList.remove('popup_opened');
}

saveButton.addEventListener('click', saveNewInputValues)
  function saveNewInputValues(e) {
    e.preventDefault(e);
      if (inputName.value != '') {
        perfilName.textContent = inputName.value
      }

      if (inputProfission.value != '') {
        perfilProfission.textContent = inputProfission.value
      }
      removeDisplayFlexPopupClass();
}
