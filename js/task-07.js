const slider = document.querySelector("#font-size-control");
const textSizeEl = document.querySelector("#text");
console.log(textSizeEl.style.fontSize);
slider.addEventListener("input", (event) => {
  textSizeEl.style.fontSize = event.currentTarget.value + "px";
});
