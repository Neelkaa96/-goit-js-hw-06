
const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

let categoryCount = 0;

categoryItems.forEach((item, index) => {
  
  const categoryTitle = item.querySelector('h2');
  
  const categoryItemsList = item.querySelectorAll('ul li');
  
  categoryCount++;

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryItemsList.length}`);
});

console.log(`Number of categories: ${categoryCount}`);
