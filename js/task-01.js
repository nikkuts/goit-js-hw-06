const numberCategories = document.querySelectorAll("h2");
console.log(`Number of categories: ${numberCategories.length}`);
const allCategories = document.querySelectorAll(".item");

console.log(`===== Варіант 1 =====`);

const firstCategory = allCategories[0].querySelectorAll("li");
const secondCategory = allCategories[1].querySelectorAll("li");
const thirdCategory = allCategories[2].querySelectorAll("li");

console.log(`Category: ${numberCategories[0].textContent}`);
console.log(`Elements: ${firstCategory.length}`);

console.log(`Category: ${numberCategories[1].textContent}`);
console.log(`Elements: ${secondCategory.length}`);

console.log(`Category: ${numberCategories[2].textContent}`);
console.log(`Elements: ${thirdCategory.length}`);

console.log(`===== Варіант 2 =====`);

allCategories.forEach((category, index) => {   
    console.log(`Category: ${numberCategories[index].textContent}`);
    const firstCategory = category.querySelectorAll("li");
    console.log(`Elements: ${firstCategory.length}`);
})