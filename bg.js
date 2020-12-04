const body = document.querySelector("body");

const IMG_NUMBER = 3;


function paintImage(imgNumber){
    const randomNumber = imgNumber + 1
    body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/${randomNumber}.jpg)`;
    
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
