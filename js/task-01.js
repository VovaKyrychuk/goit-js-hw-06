const menuCategories = document.querySelector("ul#categories");
//console.log(menuCategories);

const menuItem = menuCategories.querySelectorAll("li.item");
//console.log(menuItem);

console.log(`Number of categories : ${menuItem.length}`);

const itemElement = document.querySelectorAll(".item");
//console.log(itemElement);

itemElement.forEach((item) => {
  console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.children.length);
});
