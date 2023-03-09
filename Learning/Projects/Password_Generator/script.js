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
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

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
    Math.floor(Math.random() * (max-min)) + min
    //this random function * (max-min) will generate random int from 0 to (max-min) and this is possible that this may come 
    //as floating bhi aa sakti hai so we do round off or floor value
    // and then add min, so the final range becomes min to (max)
}

function generateRandomNumber() {
    return getRandomInt(0,9);
}

function generateLowerCase() { 
    return String.fromCharCode(getRandomInt(97,123));
    //97 -> a and 123 -> z in ASCII 
}

function generateUpperCase() { 
    return String.fromCharCode(getRandomInt(65,91));
    //65 -> A and 91 -> Z in ASCII 
}
function generateSymbol() { 
    //yahaan par hamne pehle hi ek symbol ki string bana li and then ham ek random no choose karte and uss 
    //index ka symbol return kar dete hai
    const randNum = getRandomInt(0,symbols.length);
    return symbols.charAt(randNum);
}
function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(upperCaseCheck.checked) { 
        hasUpper = true;
    }
    if(lowerCaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasLower && hasUpper &&(hasNum||hasSym) && passwordlength>=8) { 
        setIndicator("#0f0");
    } else if ((hasLower||hasUpper)&& (hasNum||hasSym) && passwordlength>=6) {
        setIndicator("#ff0");
    }
    else setIndicator("#f00")
}

function copyContent() {
    
}





