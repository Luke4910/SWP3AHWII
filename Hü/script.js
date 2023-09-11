"use strict";

const ul = document.getElementById("meineUL");

function addElement() {
    const textInput = document.getElementById("textInput");
    const text = textInput.value.trim();

    if (text !== "") {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);

       
        textInput.value = "";
    }
}
