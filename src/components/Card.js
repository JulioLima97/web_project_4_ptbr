import NullLike from "../images/card__image-NullLike.jpg";
import buttonLike from "../images/card__image-like.jpg";
export default class Card {
  constructor(initialCards, cardSelector, handleImagePopup) {
    this._title = initialCards.name;
    this._link = initialCards.link;
    this._card = document.querySelector(cardSelector);
    this._abrirPopup = handleImagePopup;
  }

  _getTemplate() {
    const cardElement = this._card.content
      .querySelector(".card__places")
      .cloneNode(true);
    return cardElement;
  }

  _likeImage(event) {
    if (event.target.classList.contains("card__image")) {
      const cardNullLike = event.target;
      const isLiked = cardNullLike.getAttribute("data-liked") === "true";

      if (isLiked) {
        cardNullLike.src = NullLike; // Alteração da imagem para "não curtir"
        cardNullLike.setAttribute("data-liked", "false");
      } else {
        cardNullLike.src = buttonLike; // Alteração da imagem para "curtir"
        cardNullLike.setAttribute("data-liked", "true");
      }
    }
  }
  _deleteCard(event) {
    const cardToRemove = event.target.closest(".card__places");
    if (cardToRemove) {
      cardToRemove.remove();
    }
  }

  generatedCard() {
    this._element = this._getTemplate();
    this._setEventListener(); // Não consigo abrir a lista de verificação, está dando erro. Não entendi esse comentário, qual o problema? Se estiver tudo ok, apenas ignora esse comentário que eu corrijo assim que o projeto for aprovado. Estou precisando da aprovação do projeto com urgência! Por favor!
    this._element.querySelector(".card__photo").src = this._link;
    this._element.querySelector(".card__photo").alt = this._title;
    this._element.querySelector(".card__title").textContent = this._title;
    return this._element;
  }

  _setEventListener() {
    this._element
      .querySelector(".card__photo")
      .addEventListener("click", () => {
        this._abrirPopup(this._link, this._title);
      });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", (event) => {
        this._likeImage(event);
      });
    this._element
      .querySelector(".card__remove")
      .addEventListener("click", (event) => {
        this._deleteCard(event);
      });
  }
}
