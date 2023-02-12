const inputRefs = document.querySelector("#validation-input");
inputRefs.addEventListener("blur", onBlurBorderColor);

function onBlurBorderColor(event) {
  const inputValue = inputRefs.getAttribute("data-length");

  if (inputRefs.value.length === Number(inputValue)) {
    inputRefs.classList.add("valid");
    inputRefs.classList.remove("invalid");
  }
  if (
    inputRefs.value.length !== Number(inputValue) &&
    inputRefs.value.length !== 0
  ) {
    inputRefs.classList.add("invalid");
  }
  if (inputRefs.value.length === 0) {
    inputRefs.classList.remove("valid");
    inputRefs.classList.remove("invalid");
  }
}
