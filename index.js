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

function sendPager() {
    pagerDisplay.value = phoneDisplay.value;
    phoneDisplay.value = "";
}    

function reset() {
    phoneDisplay.value="";
    pagerDisplay.value="";
}    


/****** EVENT LISTENERS ******/

numpad.addEventListener("click", addNumber);
resetBtn.addEventListener("click", reset);
sendBtn.addEventListener("click", sendPager)

