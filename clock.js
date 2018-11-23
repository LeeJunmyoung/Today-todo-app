const clock = document.querySelector('.js-clock');
const clockTitle = clock.querySelector('h1');


const getTime=()=>{
    const date = new Date();
    const minutes = checkTime(date.getMinutes());
    const hours = checkTime(date.getHours());
    const seconds = checkTime(date.getSeconds());
    clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`
}

const checkTime = (value)=>{
    if(value>9){
        return value;
    }else{
        return "0"+value;
    }

}

const init=()=> {
    setInterval(
    getTime
    ,1000);
}

init();