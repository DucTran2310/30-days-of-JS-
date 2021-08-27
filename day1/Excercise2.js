//First remove all the punctuations and change the string to array and count the number of words in the array
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// Remove all punctuations 
const deletePunctua = text.replace(/[.,:;]/gi, "");
console.log(deletePunctua);

let word = text.split(' ');
console.log(word.length);

// In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);
// remove 'Honey' if you are allergic to honey
shoppingCart.splice(4, 1);
console.log(shoppingCart);
// modify Tea to 'Green Tea'
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let check = countries.indexOf('Ethiopia');
const lastIndex = countries.length - 1;
if (check != -1) {
    console.log('ETHIOPIA');
} else {
    countries[lastIndex] = 'Ethiopia';
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
// If it does not exist add Sass to the array and print the array.
let check1 = webTechs.indexOf('Sass');
// const lastIndex1 = web_tech.le 
if (check1 != -1) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}