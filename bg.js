const body = document.querySelector("body");


const IMG_NUMBER = 7;

const getRandom = () => {
    const number = Math.floor(Math.random() * 7)
    return number;
}

const paintImage = number =>{
    const image = new Image();
    image.src=`backgrouds/${number}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

const handleImgLoad = () =>{
    console.log("finish load");
}

const bgInit = () => {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

bgInit();