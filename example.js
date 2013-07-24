// Creating an object
var me = {
  firstName: "Kevin",
  lastName: "Solorio",
  fullName: function(){
    return this.firstName + " " + this.lastName;
  }
};

console.log(object.firstName);
console.log(object.fullName());


// Contstructor
function Student(name, scores) {
  this.name = name;
  this.scores = scores;
};

// Prototype
Student.prototype.average = function () {
  return this.scores.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
  }, 0)/this.scores.length;
};

// Object.create()
// creates a new object with the prototype set to `me`
var you = Object.create(me);
