'use strict';
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')

const createIngredient = ingredients.map((el) => {
  const ingredientEl = document.createElement("li");
  console.log(ingredientEl)
  ingredientEl.textContent = el;
  ingredientEl.classList.add('item')
 return ingredientEl
})
ingredientsEl.append(...createIngredient)
