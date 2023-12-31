const inputBox = document.querySelector(".input-box"), 
textarea = inputBox.querySelector("textarea"),
signalNum = inputBox.querySelector(".signal_num");

let allowKeyup = true;

document.addEventListener('DOMContentLoaded', () => {
    inputBox.classList.add("introAnimate");
})

function trueTyping() {
    let valLength = textarea.value.length;
    signalNum.innerText = valLength;
    (valLength > 0) ? inputBox.classList.add("active") : inputBox.classList.remove("active");
    (valLength > 100) ? inputBox.classList.add("error") : inputBox.classList.remove("error");
    if(valLength > 100) {
        textarea.value = textarea.value.substring(0, 101);
    };
}

textarea.addEventListener('keyup', trueTyping);
textarea.focus();