/*
Scrimba M3 bootcamp project
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


/****** FUNCTIONS ******/

function playSound() {
    const pagerSound = new Audio("./assets/pager.wav");
    pagerSound.play();
}

function addNumber(e) {
    const target = e.target;
    phoneDisplay.value += target.value;
    
    if (phoneDisplay.value.length > 15) {
        phoneDisplay.value = phoneDisplay.value.slice(0, 15);
    };
};

function sendPager() { 
setTimeout(function() {
    pagerDisplay.value = phoneDisplay.value;
    phoneDisplay.value = "";
    playSound();
}, 1000)
};    


function reset() {
    phoneDisplay.value="";
    pagerDisplay.value="";
}    


/****** EVENT LISTENERS ******/

numpad.addEventListener("click", addNumber);
resetBtn.addEventListener("click", reset);
sendBtn.addEventListener("click", sendPager)

