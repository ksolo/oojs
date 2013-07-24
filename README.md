# Creating Objects
-

Object Literals:
---------------
	
	{};
	
This is the most basic way of creating an object in JavaScript.  You can initialize an object with properties and methods by passing them in as key:value pairs (and in this case saving reference to it as the variable a.

	var a = { 
			  firstName: "Dave",
			  lastName: "Hoover", 
			  fullName: function() { 
			  	return this.firstName + " " this.lastName
			  },
			  email: "dave@devbootcamp.com" 
		}
		
This is useful if there is only going to be one object, or as a means to group data together for passing information into other functions.  It is also a useful mechanism for name spacing functions.

Constructor Functions:
---------------------

	function Person(firstName, lastName, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
	
	var dave = new Person("Dave", "Hoover", "dave@devbootcamp.com");
	
The constructor function is a great tool to use when you will instantiating many objects that are similar.  This will set the initial state of the object.  To add methods that will utilize this data, you can add them to the prototype.

	Person.prototype.fullName = function(){
		return this.firstName + " " + this.lastName;
	};

Alternatively, you can add a group of functions by setting the prototype to equal an object literal that holds the method definitions.

	Person.prototype = {
		fullName: function(){
			return this.fistName + " " + this.lastName;
		},
		initials: function(){
			return this.firstName[0] + this.lastName[0];
		}
	};
	

Object.create()
---------------

	var behavior = {
		fullName: function(){
			return this.firstName + " " + this.lastName
		},
		initials: function(){
			return this.firstName[0] + this.lastName[0];
		}
	};
	
	var dave = Object.create(behavior);
	dave.firstName = "Dave";
	dave.lastName = "Hoover";
	dave.email = "dave@devbootcamp.com";
	

This could be used in conjunction with a factory method to generate new objects.

	function PersonFactory(properties, prototype) {
		var obj = Object.create(prototype);
		for(property in properties) {
			obj[property] = properties[property];
		}
		return obj;
	};
	