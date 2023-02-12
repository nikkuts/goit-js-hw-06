const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients');
// const listIngredients = [];

// ingredients.forEach((ingredient) => {
//   const individualIngredient = document.createElement("li");
//   individualIngredient.textContent = ingredient;
//   individualIngredient.class = "item";
//   listIngredients.push(individualIngredient);
// });

// list.after(...listIngredients);

const markup = ingredients.map((ingredient) => 
  `<li class="item">${ingredient}</li>`).join("");

list.insertAdjacentHTML("afterend", markup);