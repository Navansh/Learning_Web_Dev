const inputSlider = document.querySelector("[data-length-slider]");
const lengthDisplay = document.querySelector("[data-length-number]");
const passwordDisplay = document.querySelector("[data-password-display]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copy-message]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

let password = "";
let passwordlength = 10;
let checkCount = 1;
//set starting color of circle of password strength to grey
handleSlider();

//sets the password length(passwordLength)
function handleSlider() {
    inputSlider.value = passwordlength;
    lengthDisplay.innerText = passwordlength;

}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = "0 0 0 3px color";

}

function getRandomInt(min, max){
    Math.floor(Math.random() * (max-min))
    //this random function * (max-min) will generate random int from 0 to max-min and this is possible that this may come 
    //as floating bhi aa sakti hai so we do round off or floor value
}






