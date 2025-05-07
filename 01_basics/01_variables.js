const accountId = 144553
let accountEmail = "sonakshi@gmail.com"
var accontPassword = "12345"
accountCity = "Gkp"
let accountState

//accountId = 2 //not allowed

accountEmail = "abc@gmail.com"
accountPassword = "11223344"
accountCity = "Bengaluru"

/*prefer not to use var  because of issue in 
block scope and function scope
*/

console.log(accountId);
console.table([accountId , accountEmail , accountPassword ,accountCity , accountState])
