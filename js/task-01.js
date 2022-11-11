

const categoriesEl = document.querySelectorAll('.item');

// 1.Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
console.log(`Number of categories:${categoriesEl.length}`);

// 2.Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
const itemListArray = document.querySelectorAll("h2");

//  
// categoryArray
const category = document.querySelectorAll('h2');

// Category
for (let i = 0; i < category.length; i += 1) {
    console.log(`Category: ${category[i].textContent}`);
};


//  Elements

const body = document.body;
console.log(body);

const list = document.querySelector('#categories');
console.log(list);
const item = list.firstElementChild;
console.log(item);
const elements = item.querySelector('ul');
console.log(elements);
const itemElement = elements.querySelectorAll('li');
console.log(itemElement.length);

