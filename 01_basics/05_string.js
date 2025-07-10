const name = "Sonakshi"
const repoCount = 50;

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sonakshi-g-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0 , 4);
console.log(newString);

const anotherString = gameName.slice(-9, 4);
console.log(anotherString);

const newStringOne = "    sonakshi   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudharry"

console.log(url.replace("%20" , '-'))// for replacing

console.log(url.includes('hitesh')) //present hai ki nhi

console.log(gameName.split('-'));


