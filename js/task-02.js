const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let ingredient of ingredients) {
  
    const listItems = document.createElement('li');
    listItems.textContent = ingredient;
    listItems.classList.add('.item');
    console.log(listItems);
  
    const list = document.querySelector('#ingredients');
    list.appendChild(listItems);
  };







