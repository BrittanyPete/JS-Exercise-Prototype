/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}

Person.prototype.poop = function() {
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const britt = new Person('Britt', 33);
const eli = new Person('Eli', 28);

console.log('TASK 1: new person 1:', britt.toString());
console.log('new person 2:', eli.toString());

britt.eat('pizza');
britt.eat('nachos');
britt.eat('pasta');
britt.eat('cereal');
britt.eat('chips');
britt.eat('pancakes');
britt.eat('bacon');
britt.eat('ham');
britt.eat('potatoes');
britt.eat('toast');


console.log('full stomach', britt.stomach);

britt.poop();
console.log('empty stomach', britt.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  this.tank = this.tank + gallons;
  return `The tank for the ${this.model} has ${this.tank} gallons of fuel`;
}

Car.prototype.drive = function(distance){
  const driveableMiles = this.tank * this.milesPerGallon;
  if(distance <= driveableMiles){
    this.odometer = this.odometer + distance;
    this.tank = this.tank - (distance / this.milesPerGallon);
    return `The tank has ${this.tank} gallons left, and we've driven ${this.odometer} miles.`;
  } else {
    this.odometer = this.odometer + driveableMiles;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles.`;
  }
}

const honda = new Car('honda', 30);

console.log('Task 2:', honda);

console.log(honda.fill(25));
console.log(honda.drive(777));


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(){
  return `${this.name} likes to play with ${this.favoriteToy}!`;
}

const jett = new Baby('Jett', 1, 'teddy bear');
const cohen = new Baby('Cohen', 1, 'tigger');

console.log('TASK 3:', jett.play());
console.log(cohen.play());


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window binding - this binds the 'this' keyword to the window, and returns everything in the window because it doesn't understand what we are trying to bind 'this' to, so it is trying to guess.
  2. Implicit binding - this is the most popular way to bind the 'this' keyword to an object. It applies to object methods, it tells the 'this' keyword to look to the left of the dot to see what object it should be referring to.
  3. Explicit binding - we pass in arguments explicitly for what we want 'this' to refer to by using .call, .apply, and .bind.
  4. New binding - this is used by using constructor functions(which create new objects). The 'this' keyword points to the new object that was created.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}