// Country Constructor
// function Country(name, capital, continent) {
//   this.name = name;
//   this.capital = capital;
//   this.continent = continent;
//   // console.log(this);
// }

// const Portugal = new Country("Portugal", "Lisboa/Lisbon", "Europe");
// const Chile = new Country("Chile", "Alexao", "South America");
// console.log(Portugal);
// console.log(Chile);

// Person Constructor
// function Person(firstName, lastName, birthday) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(birthday);
//   this.calculateAge = function () {
//     const age = Date.now() - this.birthday.getTime;
//     const ageDate = new Date(age);
//     return Math.abs(ageDate.getUTCFullYear() - 2006);
//   };
// }

// const Armaghan = new Person("Armaghan", "Hayat", "6-15-2006");
// const Harry = new Person("Harry", "Maguire", "8-23-1993");

// console.log(Harry);

// Another Person Constructor with Examples of Inheritance
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Prototype methods

// Greeting Method
Person.prototype.greeting = function () {
  return `Hey, ${this.firstName} ${this.lastName} here!`;
};

const armaghan = new Person("Armaghan", "Hayat");
const Sam = new Person("Sam", "Robert");

// Customer Constructor
function Customer(firstName, lastName, phoneNumber, membership) {
  Person.call(this, firstName, lastName);
  this.phoneNumber = phoneNumber;
  this.membership = membership;
}

// Inherit the Person Protoype methods to Customer
Customer.prototype = Object.create(Person.prototype);

const TomSmith = new Customer("Tom", "Smith", "444-444-333", "Dealux");
console.log(TomSmith);

console.log(TomSmith.greeting());

// Got Problems? So stop watching YouTube and wasting your time, instead focus and change yourself!  
