import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(imageSelector, titleSelector, popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._imageElement = this._popup.querySelector(imageSelector);
    this._captionElement = this._popup.querySelector(titleSelector);
  }

  open(imageUrl, caption) {
    this._imageElement.src = imageUrl;
    this._imageElement.alt = "Image of " + caption;
    this._captionElement.textContent = caption;
    super.open();
  }
}