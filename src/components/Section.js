export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  _setItem(element) {
    this._container.append(element);
  }

  setElement(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      const returnRenderer = this._renderer(item);
      this._setItem(returnRenderer);
    });
  }
}
