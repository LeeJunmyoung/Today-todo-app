const form = document.querySelector(".js-form");
const form_input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting")

const USER_LOCAL_STORAGE = "currentUser";
const SHOWING_CLASS_NAME = "showing";

const paintGreeting = text =>{
    form.classList.remove(SHOWING_CLASS_NAME);
    greeting.classList.add(SHOWING_CLASS_NAME);
    greeting.innerHTML = `Hello ${text}`;
}


const loadNm = () => {
    const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);
    if(currentUser===null){
    
    } else {
        paintGreeting(currentUser);
    }
}

loadNm();