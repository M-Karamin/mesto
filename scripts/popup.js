let profilebtn = document.querySelector(".profile__button");
let popup = document.querySelector(".popup"); 
let popupSavebtn = document.querySelector(".popup__input-button-save");
let popupClosebtn = document.querySelector(".popup__button-close");

profilebtn.addEventListener("click", function (event) {
    popup.classList.add("popup_active")
});

popupClosebtn.addEventListener("click", function(event) {
    popup.classList.remove("popup_active")
  
});

popup.addEventListener("click", function(event) {
    if (event.target == event.currentTarget) {
    popup.classList.remove("popup_active")
    }
  
});


popupSavebtn.addEventListener("click", function(event) {    
    formSubmitHandler();
    popup.classList.remove("popup_active")
    
});

let formElement = document.querySelector("#container");
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-profession");

function formSubmitHandler () {
    
    document.querySelector(".profile__title").textContent = nameInput.value
    document.querySelector(".profile__text").textContent = jobInput.value

}

formElement.addEventListener('submit', formSubmitHandler);












