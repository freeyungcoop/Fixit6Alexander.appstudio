//>Create an array variable named 'petNames' that contains these pet names.
let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam'];
let withMarmaduke = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam', 'Marmaduke'];
console.log(petNames[5]);
console.log(withMarmaduke);

//> remove "Vinny" from the array.
let byeVinny = petNames.splice(5,1);
console.log(petNames);
console.log(`The action taken was: Remove Vinny\nThe remaining data are:\n${petNames}`);

//>remove "Marty" from the array.
let byeMarty = petNames.splice(3,1);
console.log(petNames);
console.log(`The action taken was: Remove Marty\nThe remaining data are:\n${petNames}`);

//>add "Nancy" to the front of the array
let hiNancy = petNames.unshift("Nancy");
console.log(petNames);
console.log(`The action taken was: Add Nancy\nThe remaining data are:\n${petNames}`);

//>add their name to the end of the array.
let hiAlex = petNames.push("Alex");
console.log(petNames);
console.log(`The action taken was: Add Alex\nThe remaining data are:\n${petNames}`);

//>tell the user the array index where "Riley" is located in the array.
alert(petNames.indexOf("Riley"));
console.log(petNames);
console.log(`The action taken was: Tell where riley is located\nThe remaining data are:\n${petNames}`);

//> tell the user the array index where "Cindy" is located. This should
alert(petNames.indexOf("Cindy"));
console.log(petNames);
console.log(`The action taken was: Tell where Cindy is located\nThe remaining data are:\n${petNames}`);

//> show the withMarmaduke array data:
console.log(withMarmaduke);
console.log(`The action taken was: Show the withMarmaduke array\nThe output is:\n${withMarmaduke}`);

//>Using the original 'pets' array, use the .shift() array method and output the results.
let shiftArray = petNames.shift();
console.log(petNames);
console.log(shiftArray);
console.log(`The action taken was: Show the remove the first element of the array\nThe output is:\n${petNames}`);

//>Using the .unshift() array method, add the name 'Barney' to the petNames array.
let hiBarney = petNames.unshift("Barney");
console.log(hiBarney);
console.log(`The action taken was: Add Barney\nThe remaining data are:\n${petNames}`);

//>Using an array method of your choice, add the array below to the end of the petNames array to make a new array that you name allPets.
let newPets = petNames.push("Ted", "Fred", "Jed", "Ned", "Ed", "Zed");
console.log(petNames);
console.log(`The action taken was: Add "Ted", "Fred", "Jed", "Ned", "Ed", "Zed" to the petNames array\nThe remaining data are:\n${petNames}`);

//>Using the array method .join(), create a string variable named stringPets that holds all of the pet names separated by commas. 
let brandNewPets = ("Bob", "Sam", "Andy");
let stringPets = brandNewPets.join();
console.log(petNames);
console.log(`The action taken was: show pet names "Bob", "Sam", "Andy" seperated by commas \nThe remaining data are:\n${petNames}`);

//>Using the .unshift() array method, add the name 'Agnes' to the petNames array.
let hiAgnes = petNames.unshift("Agnes");
console.log(petNames);
console.log(`The action taken was: Add Agnes to the petNames array \nThe remaining data are:\n${petNames}`);

