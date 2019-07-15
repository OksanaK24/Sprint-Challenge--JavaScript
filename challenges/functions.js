// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(item1, item2, cb) {
  return cb(item1, item2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(item1, item2){
  return item1+item2;
}

function multiply (item1, item2){
  return item1*item2;
}

function greeting (item1, item2){
  return `Hello ${item1} ${item2}, nice to meet you!`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!
let resultsum = consume(2, 2, add);
console.log(resultsum);

let resultmultiply = consume(10, 16, multiply);
console.log(resultmultiply);

let resgreeting = consume("Mary","Poppins", greeting);
console.log(resgreeting);


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: "internal" is inside of function "myFunction" that is parent for "nestedFunction". 
// The function that is inside of another one has access to all parent's variables alos it has access to global variables.
// That's the main point of closures.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();