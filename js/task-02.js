const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector('ul#ingredients');
// const listIngredients = [];

// ingredients.forEach((ingredient) => {
//   const individualIngredient = document.createElement("li");
//   individualIngredient.textContent = ingredient;
//   individualIngredient.class = "item";
//   listIngredients.push(individualIngredient);
// });

// listIngredientsEl.after(...listIngredients);

const markup = ingredients.map((ingredient) => 
  `<li class="item">${ingredient}</li>`)
  .join("");

listIngredientsEl.insertAdjacentHTML("afterend", markup);