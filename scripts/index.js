const profilebtn = document.querySelector(".profile__button");
const popup = document.querySelector(".popup"); 
const popupSavebtn = document.querySelector(".popup__input-button-save");
const popupClosebtn = document.querySelector(".popup__button-close");
let formElement = document.querySelector("#container");
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-profession");
let title = document.querySelector(".profile__title");
let text = document.querySelector(".profile__text");

function popupToggle(){
    popup.classList.toggle("popup_active")
    if (popup.classList.contains("popup_active") == true) {
        nameInput.value = title.textContent;
        jobInput.value = text.textContent;
    };
}

function formSubmitHandler (event) {
    event.preventDefault();
    title.textContent = nameInput.value;
    text.textContent = jobInput.value;
    popupToggle();
}

profilebtn.addEventListener("click", popupToggle)

popupClosebtn.addEventListener("click", popupToggle);

formElement.addEventListener('submit', formSubmitHandler);