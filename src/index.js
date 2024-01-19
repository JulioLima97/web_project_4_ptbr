import "./pages/index.css"
import Card from "./components/Card.js"
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";

import {
  editButton, saveButton, createButton, elementWithAllImages, initialCards, perfilName,
  perfilProfission, inputName, inputProfission, formEditProfile, formAddPost, titleCard, urlImage, addButton
} from "./utils/utils.js"

const configForm = {errorClass: "input__error", buttonErrorClass: "button-inactive"}
const configSpan = {errorSpan: "span-active"}
new FormValidator(formEditProfile, saveButton, configForm, configSpan)._enableValidation()
new FormValidator(formAddPost, createButton, configForm, configSpan)._enableValidation()

const popupWithImage = new PopupWithImage(".popup-screen-image", ".popup-screen-title", ".popup-screen")

const cardList = new Section({
  items: initialCards, renderer: (item) => {
    const newCard = new Card(item, "#template", (image, title) => {
      popupWithImage.open(image, title)
      popupWithImage.setEventListeners()
      console.log(item)
    });
    return newCard.generatedCard();
  },
},
  elementWithAllImages
);
cardList.renderItems();

// NOVA INSTACIA DAS INFORMAÇÕES DE USUARIO
const newInfoUser = new UserInfo('.perfil__name', '.perfil__profission')

const editProfilePopup = new PopupWithForm('.popup-edit', ({ name, description }) => {
  newInfoUser.setUserInfo(name, description)

},
  '.form-edit')

editProfilePopup.setEventListeners()

// EVENTO DE CLICK NO  BUTTON PARA O POPUP ABRIR   
editButton.addEventListener("click", () => {
  const { name, description } = newInfoUser.getUserInfo()
  inputName.value = name
  inputProfission.value = description
  console.log(name, description)
  editProfilePopup.open()
})



const addPopupCard = new PopupWithForm('.popup-add', (item) => {
  const card = new Card(item, '#template', (image, title) => {
    const popupWithImage = new PopupWithImage(".popup-screen-image", ".popup-screen-title", ".popup-screen")
    popupWithImage.open(image, title)
  });
  const cardElement = card.generatedCard();

  cardList.setElement(cardElement)
},
  ".form-add"
)
addPopupCard.setEventListeners()

addButton.addEventListener("click", () => {
  addPopupCard.reset()
  addPopupCard.open()
})