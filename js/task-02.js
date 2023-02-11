const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//console.log(ingredients);

const ingredEl = ingredients.map((item) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = item;
  ingredient.classList.add("item");
  return ingredient;
});
//console.log(ingredEl);

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...ingredEl);
