const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

const enterInputValue = ({ currentTarget }) =>
  (outputText.innerText = currentTarget.value.trim()
    ? currentTarget.value.trim()
    : "Anonymous");

inputText.addEventListener("input", enterInputValue);
