// constants - values that won't change, useful to avoid errors in the future

const carID = 42; // const must be initialized 
// carID = 100; -- ERROR 



// let and var for variable declarations 
// let has blocked scoping 
if (true) {
    let foo = 9;
}
// console.log(foo); // error! 

// let - cannot call on a variable before defining 
//console.log(faveMovie); // error
let faveMovie = 'Batman'; 
// best practice to use let over var as let allows you to catch errors earlier 

// var you can use outside scope 
if (true) {
    var foo = 22;
}
console.log(foo); // 22

// var - can call on a variable before defining 
console.log(faveColor); // undefined 
var faveColor = 'pink'; 


// rest parameters - refers to the 'rest' of the data 
// can store multiple arguments in an array 
// always place rest parameters lasts in an argument 
function bankStatement(day, ...transactions) {
    transactions.forEach( id => console.log(id) );
}
bankStatement('Monday', 100, 200, 555); 


// destructuring arrays (use []) - assigning arrays to variables 
let employeeIds = [1,2,3];
let [employee1, employee2, employee3] = employeeIds; // destructuring 

console.log(employee1,employee2,employee3); 

let carIds = [5,6,7];
let car1, remainingCars; // declaring 
[car1, ...remainingCars] = carIds // initalizing - destructuring using rest parameters

console.log(car1, remainingCars); 

// destructing arrays, skipping elements using comma 
// the more commas added the more elements skipped 
let shoppingList = ['apples', 'salad', 'chocolate', 'ice cream']
let cheatDayShopping; 
[,, ...cheatDayShopping] = shoppingList; // 2 commas = index 0 and 1 left out 

console.log(cheatDayShopping); 

// destructuring objects - use {}
let car = { year: 2005, style: 'convertible' };
let { year, style } = car;

console.log(year, style); 

// {} are also used in code blocks, need to put destructuring statement in parentheses
let menu = { pasta: 10, pizza: 5, coffee: 3}
let pasta, pizza, coffee;
({ pasta, pizza, coffee } = menu);

console.log(pasta,pizza,coffee); 

// spread syntax (good for arrays & strings)- spread out an arrays elements to be assigned to parameters.
// takes an array and breaks them into parameters 
function numbers(num1, num2, num3) {
    console.log(num1, num2, num3); 
}
let numberIds = [1, 2, 3];  // 1 gets stored in num1, 2 gets stored in num2 etc
numbers(...numberIds);  

// in js strings and arrays are called interables, as you can iterate through both. 

// js has dynamic typing - the type of a variable can change overtime
// typeof(), a built in js function - finds the type variable 
typeof(1); // number 
typeof(true); // boolean 
typeof('Hello world!'); // string 
typeof( function(){} ); // function 
typeof({}); // object 
typeof(null); // object 
typeof(undefined); // undefined 
typeof(NaN); // number 

console.log(typeof(1));

// common types of conversions 

// convert to string 
foo.toString(); 

// convert string to integer 
Number.parseInt('55');  // 55
Number.parseInt('55ABC'); // 55

// convert string to float 
Number.parseFloat('55.555');
// string needs to start as a number or you get NaN
console.log( Number.parseFloat('ABC22.5')) // NaN

// controlling loops 
// for loops - 
// break statement, breaks a loop 
for (let i=0; i<5; i++) {
    if (i === 2)
     break; 
    console.log(i)
}

// continue statement, skips and continues the loop 
for (let i=0; i<5; i++) {
    if (i === 2)
     continue; 
    console.log(i)
}
