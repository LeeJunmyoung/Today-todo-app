const form = document.querySelector(".js-form");
const form_input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting")

const USER_LOCAL_STORAGE = "currentUser";
const SHOWING_CLASS_NAME = "showing";



const askForName = () => {
    form.classList.add(SHOWING_CLASS_NAME);
    form.addEventListener("submit",handleSubmit);
}

let  handleSubmit = (event) => {
    event.preventDefault();
    const currentValue = form_input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

const saveName = (text) =>{
    localStorage.setItem(USER_LOCAL_STORAGE,text);
}


const paintGreeting = text =>{
    form.classList.remove(SHOWING_CLASS_NAME);
    greeting.classList.add(SHOWING_CLASS_NAME);
    greeting.innerHTML = `Hello ${text}`;
}


const loadNm = () => {
    const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);
    if(currentUser===null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

loadNm();