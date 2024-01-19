import "./pages/index.css"
import Card from "./components/Card.js"
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";

import { editButton, saveButton, createButton, elementWithAllImages, initialCards, perfilName,
   perfilProfission, formEditProfile, formAddPost, titleCard, urlImage, addButton } from "./utils/utils.js"



// Validações

const configForm = {errorClass: "input__error", buttonErrorClass: "button-inactive"}
const configSpan = {errorSpan: "span-active"}
new FormValidator(formEditProfile, saveButton, configForm, configSpan)._enableValidation()
new FormValidator(formAddPost, createButton, configForm, configSpan)._enableValidation()



   const popupWithImage = new PopupWithImage('.popup-screen-card');

   const cardList = new Section({ items: initialCards, renderer: (item) => {
    const newCard = new Card(item, "#template", (image, title) => {
      console.log(image, title)
    //  popupWithImage.open(image, title)
     // popupWithImage.setEventListeners()
    });
    return newCard.generatedCard();
  },
},
  elementWithAllImages
);
  cardList.renderItems();









const addProfilePopup = new PopupWithForm('.popup-add', (item) => {
    titleCard.textContent = item.title
    urlImage.textContent = item.link
    addProfilePopup.close()},
  '.form-add', addButton);
addProfilePopup.setEventListeners()


/*

// Implementa botao de Edição de Perfil
const editButton = document.querySelector(".button-edit");
editButton.addEventListener("click", () => {
  editProfilePopup.open();
  const userData = userInfo.getUserInfo();
  document.querySelector(".input-name").value = userData.title;
  document.querySelector(".input-description").value = userData.subtitle;
});
// Implementa Event Listener de Popup de Edição Perfil
editProfilePopup.setEventListeners();

// Implementa o popup de Adicionar Card
const addCardPopup = new PopupWithForm({popupSelector: ".form-add",
formSelector: '[name="form__add"]',
  handleFormSubmit: (cardItem) => {
    const cardElement = createCard(cardItem);
    document.querySelector(elementWithAllImages).prepend(cardElement);
  },
});
// Implementa Event Listener de Popup de Adicionar Card
addCardPopup.setEventListeners();

// Implementa botao de Adicionar Card
const addButton = document.querySelector(".button-add");
addButton.addEventListener("click", () => {
  addCardPopup.open();
});

const userInfo = new UserInfo({
  nameSelector: '.perfil__name',
  jobSelector: '.perfil__profission'
});
*/








/*
const formEditProfile = new FormValidator("#form-edit-profile", listOfClasses);
formEditProfile.enableValidation();

const formAddPost = new FormValidator("#form-add-profile", listOfClasses);
formAddPost.enableValidation();

const handleFormSubmit = (formAddPost) => {
  formAddPost;
}

const popupWithFormPost = new PopupWithForm('.popup-add', handleFormSubmit);
popupWithFormPost.setEventListeners();

addButton.addEventListener('click', () => {
  popupWithFormPost.open()
})

const popupWithFormEdit = new PopupWithForm('.popup-edit', handleFormSubmit);
popupWithFormEdit.setEventListeners();

editButton.addEventListener('click', () => {
  popupWithFormEdit.open();
})

const userInfo = new UserInfo({
  nameSelector: '.perfil__name',
  jobSelector: '.perfil__profission'
});

function handleSaveButton(evt) {
  evt.preventDefault();

  const name = document.getElementById("name");
  const about = document.getElementById("about");

  userInfo.setUserInfo({
    name: name.value,
    job: about.value
  });

  popupWithFormEdit.close();
}

saveButton.addEventListener('click', handleSaveButton);

createButton.addEventListener('click', () => {
  const url = document.querySelector(".input-link").value;
  const title = document.querySelector(".input-título").value;
  const newCard = new Card(url, title, popupWithImage);
  const newCardElement = newCard.generateCard();
  cardList.addNewItem(newCardElement);
  popupWithFormPost.close();
})








const editButton = document.querySelector('.button-edit');
const addButton = document.querySelector(".button-add");
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupImage = document.querySelector('.popup-screen');
const popupElement = documento.querySelector(".popup-screen-card")
const popupScreenTitle = document.querySelector('.popup-screen-title')
const popupScreenImage = document.querySelector(".popup-screen-image")

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


inputName.value = perfilName.textContent
inputProfission.value = perfilProfission.textContent

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
import lick from "./images/card__image-2.jpg"
import unlick from "./images/img-info.jpg"
function likeImage(event) {
  if (event.target.classList.contains("card__image")) {
    const cardUnlike = event.target;
    const isLiked = cardUnlike.getAttribute("data-liked") === "true";

    if (isLiked) {
      cardUnlike.src = unlick; // Alteração da imagem para "não curtir"
      cardUnlike.setAttribute("data-liked", "false");
    } else {
      cardUnlike.src = lick; // Alteração da imagem para "curtir"
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
*/