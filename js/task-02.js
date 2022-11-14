const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientEl = ingredients.filter(ingredient => ingredient);
// console.log(ingredientEl);

 

for (let ingredient of ingredients) {
  const listItems = document.createElement('li');
  listItems.textContent = ingredient;
  listItems.classList.add('.item');
  console.log(listItems);
  const list = document.querySelector('#ingredients');
  list.append(listItems);
}


