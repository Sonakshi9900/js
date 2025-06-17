// Primitive
// 7 types : String , Number , Boolean , Null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //object
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id == anotherId);

// const bigNumber = 4534345666753456786n



//Reference (Non Primitive)
// Array , Objects , Functions

const heros = ["shaktimaan" , "naagraj" , "doga"];
let myObj = {
    name: "Sonakshi",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
// https://262.ecma-international.org/5.1/#sec-11.4.3