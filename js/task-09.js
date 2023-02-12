function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const valueColor = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

//console.log(valueColor);
//console.log(changeColorButton);

const bodyBg = document.body;

const changeColor = () => {
  valueColor.textContent = getRandomHexColor();
  bodyBg.style.backgroundColor = valueColor.textContent;
};
changeColorButton.addEventListener("click", changeColor);
