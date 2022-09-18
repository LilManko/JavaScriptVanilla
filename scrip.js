// var, let , const - variables for javascript

var name; // Declaring a variable\
name = "yoni - var name";

var name1 ="yoni - var name";
var name ="john - 'name' redeclared";

console.log(name);
console.log(name1);



// LET  
let name2 = "yoni let";
console.log(name2)
// cannot be redeclared
// can be reassigned
let name3;
name3="yoni";
name3="yoni reassigned";
console.log(name3)



// CONST
const nameConst = "yoni - const";
console.log(nameConst)
// cannot be redeclared
// cannot be reassigned




// // Function Expression
// const greet = function (){
//     console.log("HelloFuncExpresion");
// }


//Arrow Function
const greet = () => console.log("HelloArrow");
greet();


 
const double = number => number * 2;

console.log(double(2));

const add = (a, b) => a+b

console.log(add(2,4));


