//Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    eatingMethod() {
        const action = this.name + 'is eating';
        return action;
    }
}

const Dog1 = new Animal('kitty', 4, 'black', 4);
const Cat1 = new Animal('milo', 3, 'Brown', 4);

console.log(Dog1);
console.log(Cat1);

// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    saySomething() {
        console.log('I am a child of the animal class')
    }
};

const Dog2 = new Dog('messi', 5, 'blue', 4);

console.log(Dog2);
console.log(Dog2.saySomething());
console.log(Dog2.eatingMethod());

//  Override the method you create in Animal class
class Bird extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs);
        this.gender = gender;
    };
    genderMethod() {
        const findGender = this.name + ' is ' + this.gender;
        return findGender;
    }
}

const dove = new Bird('nemo', 2, 'black', 2, 'male');

console.log(dove);
console.log(dove.genderMethod());