const editButton = document.querySelector('.button__edit');
const popup = document.querySelector('.popup__container');
const closeButton = document.querySelector('.button__close-popup');
const formPopup = document.querySelector('.popup__form');
const saveButton = document.querySelector('.button__save');
const inputName = formPopup.querySelector('.input__name');
const inputProfission = formPopup.querySelector('.input__profission');
const perfilName = document.querySelector('.perfil__name');
const perfilProfission = document.querySelector('.perfil__profission');



editButton.addEventListener('click', addPopupClassToDisplay)
  function addPopupClassToDisplay() {
    popup.classList.add('popup__form');
}

closeButton.addEventListener('click', removeDisplayFlexPopupClass)
  function removeDisplayFlexPopupClass() {
    popup.classList.remove('popup__form');
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