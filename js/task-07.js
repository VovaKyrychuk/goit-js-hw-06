const slider = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
slider.addEventListener("input", handleInputRange);
textEl.style.fontSize = Number(slider.value) + "px";
function handleInputRange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
