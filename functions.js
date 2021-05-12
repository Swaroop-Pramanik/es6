//OLD JAVASCRIPT

function sayName() {
  console.log('Hello, I am Ed');
}

var sayAge = function () {
  console.log("My age is, well I don't want to tell you");
};

sayAge();
sayName();

//ES6
const sayLocation = (location, name) => {
  console.log(`I am ${name} My location is ${location}`);
};

sayLocation('Paris', 'Swaroop');
