const editButton = document.querySelector('.button-edit');
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupImage = document.querySelector('.popup-screen');
const addCloseButton = document.querySelector('.popup-add-close');
const editCloseButton = document.querySelector('.popup-edit-close');
const saveButton = document.querySelector('.button-save');
const createButton = document.querySelector('.button-create')
const inputName = document.querySelector('.input-name');
const inputProfission = document.querySelector('.input-description');
const perfilName = document.querySelector('.perfil__name');
const perfilProfission = document.querySelector('.perfil__profission');
const elementWithAllImages = document.querySelector(".card");
const addButton = document.querySelector(".button-add");
const removeButton = document.querySelector(".card__remove");
const likeButton = document.querySelector(".card__image");
const imageClose = document.querySelector(".popup-close");
const popup = Array.from(document.querySelectorAll(".popup"));

addButton.addEventListener('click', addPopupClassToDisplay)
function addPopupClassToDisplay() {
  popupAdd.classList.add('popup_opened');
}

function removeDisplayAddPopupClass(e) {
  e.preventDefault();
  popupAdd.classList.remove('popup_opened');
}
addCloseButton.addEventListener('click', removeDisplayAddPopupClass)

// ==================== Edit Popup================================

editButton.addEventListener('click', editPopupClassToDisplay)

function editPopupClassToDisplay() {
  popupEdit.classList.add('popup_opened');
  inputName.value = perfilName.textContent
  inputProfission.value = perfilProfission.textContent
}

function removeDisplayEditPopupClass(e) {
  e.preventDefault();
  popupEdit.classList.remove('popup_opened');
}
editCloseButton.addEventListener('click', removeDisplayEditPopupClass)

function saveNewInputValues(e) {
  e.preventDefault();
    perfilName.textContent = inputName.value;
    perfilProfission.textContent = inputProfission.value;
    removeDisplayEditPopupClass(e)
}
saveButton.addEventListener('click', saveNewInputValues)

document.onkeydown = (evt) => {
  if (evt.key === "Escape") {
    popup.forEach((element) => {
      element.classList.remove("popup_opened");
    });
  }
};

popup.forEach((container) => {
  container.addEventListener("click", (evt) => {
    evt.target.classList.remove("popup_opened");
  });
});

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

function renderCards(card) {
  const cardTemplate = document.querySelector("#template").content
  const cardElement = cardTemplate.querySelector(".card__places").cloneNode(true)
  cardElement.querySelector(".card__title").textContent = card.name
  cardElement.querySelector(".card__photo").setAttribute("src", card.link)
  cardElement.querySelector(".card__photo").setAttribute("alt", card.name)

  cardElement.querySelector('.card__image').addEventListener("click", (event) => {
    if (event.target.getAttribute('src') == "./images/card__image-2.jpg") {
      event.target.setAttribute('src', "./images/img-info.jpg");
    }
    else {
      event.target.setAttribute('src', "./images/card__image-2.jpg");
    }
  })

  cardElement.querySelector('.card__remove').addEventListener("click", (e) => {
    e.target.parentElement.remove()
  })

  cardElement.querySelector(".card__photo").addEventListener("click", () => {

    const imageScreen = document.querySelector(".popup-screen-image");
    const titleScreen = document.querySelector(".popup-screen-title");

    imageScreen.setAttribute("src", card.link);
    imageScreen.setAttribute("alt", card.name);
    titleScreen.textContent = card.name;
    popupImage.classList.add('popup_opened')

  });
  return cardElement
}

function removeDisplayImagePopupClass(e) {
  e.preventDefault();
  popupImage.classList.remove('popup_opened');
}

imageClose.addEventListener("click", removeDisplayImagePopupClass)

initialCards.forEach((image) => {
  const cardCreated = renderCards(image);
  elementWithAllImages.prepend(cardCreated);
});

function addCard(e) {
  e.preventDefault()
  const title = document.querySelector(".input-título")
  const urlImage = document.querySelector(".input-link")

  if (title.value == "" || urlImage.value == "") {
    alert("Por favor preencha os campos corretamente!")
    return
  }
  elementWithAllImages.prepend(renderCards({
    name: title.value,
    link: urlImage.value
  }))
  title.value = ""
  urlImage.value = ""
  removeDisplayAddPopupClass(e)
}
createButton.addEventListener("click", addCard)
