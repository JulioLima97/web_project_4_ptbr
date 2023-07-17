const editButton = document.querySelector('.button-edit');
const popup_edit = document.querySelector('.popup-edit');
const popup_add = document.querySelector('.popup-add');
const popup_image = document.querySelector('.popup__screen');
const addcloseButton = document.querySelector('.close-add');
const editcloseButton = document.querySelector('.close-edit');
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
const imageclose = document.querySelector(".popup-close");

addButton.addEventListener('click', addPopupClassToDisplay)
function addPopupClassToDisplay() {
  popup_add.classList.add('popup_opened');
}

function removeDisplayAddPopupClass(e) {
  e.preventDefault();
  popup_add.classList.remove('popup_opened');
}

// ==================== Edit Popup================================

editButton.addEventListener('click', editPopupClassToDisplay)

function editPopupClassToDisplay() {
  popup_edit.classList.add('popup_opened');
}

function removeDisplayEditPopupClass(e) {
  e.preventDefault();
  popup_edit.classList.remove('popup_opened');
}





function saveNewInputValues(e) {
  e.preventDefault();
  if (inputName.value != '') {
    perfilName.textContent = inputName.value
  }

  if (inputProfission.value != '') {
    perfilProfission.textContent = inputProfission.value
  }
}
saveButton.addEventListener('click', saveNewInputValues)

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

    const imageScreen = document.querySelector(".popup__screen_image");
    const titleScreen = document.querySelector(".popup__screen_title");

    imageScreen.setAttribute("src", card.link);
    imageScreen.setAttribute("alt", card.name);
    titleScreen.textContent = card.name;
    popup_image.classList.add('popup_opened')

  });
  return cardElement
}

function removeDisplayImagePopupClass(e) {
  e.preventDefault();
  popup_image.classList.remove('popup_opened');
}

imageclose.addEventListener("click", removeDisplayImagePopupClass)


for (const image of initialCards) {
  const cardCreated = renderCards(image)
  elementWithAllImages.append(cardCreated)
}

function addCard(e) {
  e.preventDefault()
  const title = document.querySelector(".input-título")
  const urlImage = document.querySelector(".input-link")
  console.log(title);
  console.log(urlImage);
  if (title.value == "" || urlImage.value == "") {
    alert("Por favor preencha os campos corretamente!")
    return
  }
  elementWithAllImages.append(renderCards({
    name: title.value,
    link: urlImage.value
  }))
  title.value = ""
  urlImage.value = ""
  removeDisplayAddPopupClass(e)
}
createButton.addEventListener("click", addCard)
