const inputBox = document.querySelector(".input-box"), 
textarea = inputBox.querySelector("textarea"),
signalNum = inputBox.querySelector(".signal_num")

function trueTyping() {
    let valLength = textarea.value.length;
    signalNum.innerText = valLength;
    (valLength > 0) ? inputBox.classList.add("active") : inputBox.classList.remove("active");
    (valLength > 100) ? inputBox.classList.add("error") : inputBox.classList.remove("error");
    if(valLength > 100) {
        removeEventListener("keyup", code);
    };
}

const code = textarea.addEventListener('keyup', trueTyping);


// textarea.addEventListener('keyup', () => {
//     let valLength = textarea.value.length;
//     signalNum.innerText = valLength;
//     (valLength > 0) ? inputBox.classList.add("active") : inputBox.classList.remove("active");
//     (valLength > 100) ? inputBox.classList.add("error") : inputBox.classList.remove("error");
//     if(valLength > 100) return false;
// })

// textarea.removeEventListener('keyup', )