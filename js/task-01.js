const categoriesEl = document.querySelectorAll('.item');


// 1.Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
console.log(`Number of categories: ${categoriesEl.length}`);


// 2.Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const body = document.body;

const list = document.querySelector('#categories');


// first categories

const firstItems = list.firstElementChild;

const firstElements = firstItems.querySelector('ul');

const firstCategory = firstItems.querySelector('h2');
console.log(`Category: ${firstCategory.textContent}`);
const firstElement = firstElements.querySelectorAll('li');
console.log(`Element: ${firstElement.length}`);

// second categories

const secondItems = firstItems.nextElementSibling;

const secondCategory = secondItems.querySelector('h2');
console.log(`Category: ${secondCategory.textContent}`);
const secondElements = secondItems.querySelector('ul');

const secondElement = secondElements.querySelectorAll('li');
console.log(`Element: ${secondElement.length}`);

// last categories

const lastItems = secondItems.nextElementSibling;
const lastCategory = lastItems.querySelector('h2');
console.log(`Category: ${lastCategory.textContent}`);
const lastElements = lastItems.querySelector('ul');
const lastElement = lastElements.querySelectorAll('li');
console.log(`Element: ${lastElement.length}`);

