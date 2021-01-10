// Question 1 Loop through the array below and console log each type property if the age is at least 4.


// Answer

var pets = [
	{
		type: "cat",
		age: 5.5,
	},
	{
		type: "dog",
		age: 3.8,
	},
	{
		type: "parrot",
		age: 4.0,
	},
];


for (var i = 0; i < pets.length; i++) {
    var age = pets[i].age;
    var type = pets[i].type;

    if (age >= 4)  {
        console.log(type)
    }
}
// Question 2 
// Create a function with one argument. 
// Inside the function check the type of the value being passed in.
// If it is a boolean value, log the value.
// If it is not a boolean value, log the message "Please pass a boolean value in".
// Call the function and pass a value in.


// Answer
// Declaring the function

function flowerName(rose) {
	var typeofFlower = typeof rose;
	if (typeofFlower == Boolean) {
	return true;
	} else {
		return "Please pass a boolean value in";
	}
}

// call the function
var result = flowerName("rose");

console.log(result);


// Question 3
// Write code that does the following:
// When the button in the HTML is clicked, change the colour of the h2 element to "blue" and change it to read "Updated subheading".


// Answer
// Declaring the function

 var subHeading = document.querySelector("h2");
 var button = document.querySelector("button");
 

// Call the function

function changeSubHeading() {
    subHeading.innerHTML = "Updated subheading";
    subHeading.style.color = "blue";
}

button.onclick = changeSubHeading;

