const profilebtn = document.querySelector(".profile__button");
const popup = document.querySelector(".popup"); 
const popupSavebtn = document.querySelector(".popup__input-button-save");
const popupClosebtn = document.querySelector(".popup__button-close");
let formElement = document.querySelector("#container");
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-profession");
let title = document.querySelector(".profile__title");
let text = document.querySelector(".profile__text");
nameInput.value = title.textContent
jobInput.value = text.textContent

profilebtn.addEventListener("click", function (event) {
    popup.classList.add("popup_active")
});

popupClosebtn.addEventListener("click", function(event) {
    popup.classList.remove("popup_active")
  
});

popupSavebtn.addEventListener("click", function(event) {    
    formSubmitHandler(event);
    popup.classList.remove("popup_active")
    
});

function formSubmitHandler (event) {
    event.preventDefault();
    title.textContent = nameInput.value
    text.textContent = jobInput.value

}

formElement.addEventListener('submit', formSubmitHandler);
