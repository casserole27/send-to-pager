/*
Author: Cassie Lewis
https://clewisdev.com
Date: March 2023 
*/

/****** VARIABLES ******/

const pagerDisplay = document.getElementById("pager-field");
let phoneDisplay = document.getElementById("phone-field");

const numpad = document.getElementById("numpad");

const resetBtn = document.getElementById("reset-btn");
const sendBtn = document.getElementById("send-btn");

let num = [];

/****** FUNCTIONS ******/

//TODO PULL NUMBER BUTTONS VIA EVENT DELEGATION AND DATASETS

function addNumber(e) {
    const target = e.target;
    console.log(target);
    num.push(target.value);
    console.log(num)
    renderNumbers()
}

function renderNumbers() {
    for (let i = 0; i < num.length; i++) {
        console.log(num[i])
//! DISPLAY EACH NUMBER AS CLICKED
        phoneDisplay.value = num[i];
    }};



function reset() {
    phoneDisplay.value="";
    pagerDisplay.value="";
}    

/*
function renderEmojis() {
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}
*/

//TODO DISPLAY IN "PHONE" DISPLAY

//TODO SEND TO "PAGER DISPLAY"


/****** EVENT LISTENERS ******/


numpad.addEventListener("click", addNumber);
resetBtn.addEventListener("click", reset);

//TODO EVENTLISTENER SEND BUTTON

