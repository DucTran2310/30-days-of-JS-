// Create an empty object called dog
const dog = {

};
// Print the the dog object on the console
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Pug';
dog.legs = 4;
dog.age = 6;
dog.color = 'black';
dog.bark = 'woof woof';

console.log(dog);

// Get name, legs, color, age and bark value from the dog object
console.log(Object.values(dog));

// Set new properties the dog object: breed, getDogInfo
dog.breed = 'Husky';
dog.getDogInfo = function() {
    return `${this.name} is a ${this.color} ${this.breed}`;
}

console.log(dog.getDogInfo());