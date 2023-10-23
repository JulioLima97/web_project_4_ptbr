import {initialCards} from "./initialCards.js";
import Card from "./Card.js"
import { openPopup } from "./utils.js";
import {closePopups} from "./utils.js";
import { closeEsc } from "./utils.js";
import FormValidator from "./FormValidator.js";

const editButton = document.querySelector('.button-edit');
const addButton = document.querySelector(".button-add");
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupImage = document.querySelector('.popup-screen');
const addCloseButton = document.querySelector('.close-add');
const editCloseButton = document.querySelector('.close-edit');
const saveButton = document.querySelector(".button-save");
const createButton = document.querySelector('.button-create')
const inputName = document.querySelector('.input-name');
const inputProfission = document.querySelector('.input-description');
const perfilName = document.querySelector('.perfil__name');
const perfilProfission = document.querySelector('.perfil__profission');
const elementWithAllImages = document.querySelector(".card");
const imageClose = document.querySelector(".popup-close");
const popup = Array.from(document.querySelectorAll(".popup"));
const titleCard = document.querySelector(".input-título")
const urlImage = document.querySelector(".input-link")
const formEditProfile = document.querySelector(".form-edit")
const formAddPost = document.querySelector("#form-add-profile")

// ====================Abrir e fechar Popup Add================================

addButton.addEventListener('click', () => {
  openPopup(popupAdd)
})

addCloseButton.addEventListener("click", () => {
  popupAdd.classList.remove("popup_opened")
});

// ====================Abrir e fechar Popup Edit================================

editButton.addEventListener('click', () => {
  openPopup(popupEdit)
})

editCloseButton.addEventListener("click", () => {
  popupEdit.classList.remove("popup_opened")
});

// ==================== Button Save do Popup Edit================================

popupEdit.addEventListener("submit", saveNewInputValues)
function saveNewInputValues(e) {
  e.preventDefault();
  perfilName.textContent = inputName.value;
  perfilProfission.textContent = inputProfission.value;
  closePopups(popupEdit)
}

// ========= Criação de cards novo e exportação dos valores para o arquivo Card ======================

formAddPost.addEventListener("submit", (event) => {
  event.preventDefault();
  const cardsItem = {
    name: titleCard.value,
    link: urlImage.value,
  };

  const newCard = new Card(cardsItem, "#template", handleOpenPopup)
  const cardElement =  newCard._generatedCard()
  elementWithAllImages.prepend(cardElement)
  formAddPost.reset();
});

// ==================== Abrir Popup Screen================================

function handleOpenPopup (image) {
  popupImage.classList.add("popup_opened")
  document.addEventListener("keydown", (evt) => {
    closeEsc(evt, popupImage)
  })
  popupImage.querySelector(".popup-screen-image").src = image
}

// ==================== Button Close "X" para o Popup Screen================================

imageClose.addEventListener('click', ImageScreen)
function ImageScreen() {
  popupImage.classList.remove('popup_opened');
}

// ==================== Delete Button================================

function removeCardElement(event) {
  const cardToRemove = event.target.closest(".card__places");
  if (cardToRemove) {
    cardToRemove.remove();
  }
}

function deleteCard(event) {
  if (event.target.classList.contains("card__remove")) {
    removeCardElement(event);
  }
}
elementWithAllImages.addEventListener("click", deleteCard);

// ==================== Button Like================================

function likeImage(event) {
  if (event.target.classList.contains("card__image")) {
    const cardUnlike = event.target;
    const isLiked = cardUnlike.getAttribute("data-liked") === "true";

    if (isLiked) {
      cardUnlike.src = "./images/card__image-2.jpg"; // Alteração da imagem para "não curtir"
      cardUnlike.setAttribute("data-liked", "false");
    } else {
      cardUnlike.src = "./images/img-info.jpg"; // Alteração da imagem para "curtir"
      cardUnlike.setAttribute("data-liked", "true");
    }
  }}
elementWithAllImages.addEventListener("click", likeImage);

// ==================== Fechar os Popups precionando fora deles=============================

popup.forEach((container) => {
  container.addEventListener("click", (evt) => {
    evt.target.classList.remove("popup_opened");
  });
});

// ====================Função para deixar o cards já gerados quando atualizar a página   ================================

window.addEventListener("load", () => {
  const cardArray = initialCards.map((data) => new Card(data, "#template", handleOpenPopup))
  cardArray.forEach((card) => {
    const cardElements = card._generatedCard()
    elementWithAllImages.append(cardElements)
  })
})

// ==================== Aqui é onde está sendo exportado para o FormValidator as informações de validação dos Popups =======================================

const configForm = {errorClass: "input__error", buttonErrorClass: "button-inactive"}
const configSpan = {errorSpan: "span-active"}
new FormValidator(formEditProfile, saveButton, configForm, configSpan)._enableValidation()
new FormValidator(formAddPost, createButton, configForm, configSpan)._enableValidation()