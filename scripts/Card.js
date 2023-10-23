
export default class Card {
  constructor(initialCards, cardSelector, handleImagePopup) {
      this._title = initialCards.name
      this._link = initialCards.link
      this._card = cardSelector
      this._abrirPopup = handleImagePopup
  }

  _getTemplate () {
    const cardElement = document.querySelector(this._card).content.querySelector(".card__places").cloneNode(true)
    return cardElement;
  }

  _setEventListener () {
    this._element.querySelector(".card__photo").addEventListener("click", () => {
      this._abrirPopup(this._link)
    })
  }

  _generatedCard () {
    this._element = this._getTemplate()
    this._setEventListener()
    this._element.querySelector(".card__photo").src = this._link
    this._element.querySelector(".card__title").textContent = this._title
    return this._element;
  }
}