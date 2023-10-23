export { openPopup }
export { closeEsc }
export {closePopups}

const openPopup = (popup) => {
    popup.classList.add("popup_opened")
    document.addEventListener("keydown", (e) => {
        closeEsc(e, popup)
    })
}
const closePopups = (popup) => {
    popup.classList.remove("popup_opened")
}
const closeEsc = (e, popup) => {
    if (e.key === "Escape") {
        popup.classList.remove("popup_opened")
    }
    document.removeEventListener("keydown", (e) => {
        closeEsc(e, popup) 
      })
}