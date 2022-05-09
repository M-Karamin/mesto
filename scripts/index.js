const profilebtn = document.querySelector(".profile__button");
const popup = document.querySelector(".popup"); 
const popupSavebtn = document.querySelector(".popup__input-button-save");
const popupClosebtn = document.querySelector(".popup__button-close");
let formElement = document.querySelector("#container");
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-profession");
let title = document.querySelector(".profile__title");
let text = document.querySelector(".profile__text");

function Click(){
    popup.classList.toggle("popup_active")
}

profilebtn.addEventListener("click", Click)
    nameInput.value = title.textContent
    jobInput.value = text.textContent
;

popupClosebtn.addEventListener("click", Click);

function formSubmitHandler (event) {
    event.preventDefault();
    title.textContent = nameInput.value
    text.textContent = jobInput.value
    popupSavebtn.addEventListener("click", Click)
}

formElement.addEventListener('submit', formSubmitHandler);
