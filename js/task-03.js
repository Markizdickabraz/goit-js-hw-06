const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// розмітка 
 
const makegalleryItems = ({ url, alt }) => {
  return `
  <li class = "gallery__item">
  <img src =${url} , alt = ${alt} , width = 480, height = 100%>
  </li>
  `;
};
// console.log(makegalleryItems(images[0]));

// функція перебору та додаваня в масив

const makegalleryList = images.map(makegalleryItems).join(' ');

// шукаю потрібно строку через клас
const galleryList = document.querySelector('.gallery');
galleryList.style.display = 'flex';

// не спраацював ГЕП(
galleryList.style.gap = "30";
galleryList.style.listStyle = "none";

// console.dir(galleryList);


// дадаю до неі елементи
galleryList.insertAdjacentHTML("afterbegin", makegalleryList);
console.log(galleryList);



// const makegalleryList = (options) => {
//   return options.map(option => {
//     const imgEl = document.createElement('img');
//     imgEl.src = option.url;
//     imgEl.alt = option.alt;
//     imgEl.width = 480;

//     return imgEl;
//   });
// };

// const elements = makegalleryList(images);
// galleryList.insertAdjacentHTML('afterbegin');
