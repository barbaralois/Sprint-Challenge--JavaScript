// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation: nestedFunction is able to access internal because it is within its scope. Child functions are able to access anything in their parent/grandparent/etc all the way up to the global/window object. Parent functions are not able to access items inside of their internal functions, though.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  let counter = 0;
  function addUp() {
    for (let i = 1; i <= num; i++) {
      counter = counter + i;
    }
  }
  addUp();
  return counter;
}

console.log(summation(4));
