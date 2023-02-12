let counterValue = 0;

const valueReferal = document.getElementById("value");

const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');

const onClickMinusBtn = (event) => {
  counterValue -= 1;
  valueReferal.textContent = counterValue;
};

minusBtn.addEventListener("click", onClickMinusBtn);

const onClickPlusBtn = (event) => {
  counterValue += 1;
  valueReferal.textContent = counterValue;
};

plusBtn.addEventListener("click", onClickPlusBtn);
