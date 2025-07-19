function sayMyname(){

    console.log("S");
    console.log("O");
    console.log("N");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("I");
}
// sayMyName()

// function addTwoNum(num1 , num2){
//     console.log(num1 , num2);
// }
function addTwoNum(num1 , num2){
    // let result = num1 + num2
    // return result
    // console.log("Sonakshi") // return ke baad ka kuch v print nhi hota h
    return num1 + num2
}

const result = addTwoNum(3 , 5)

// console.log("Result: " , result);
 function loginUserMsg(username = "Sam"){
    if(username === undefined){ 
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` //``-> back ticks
 }

//  console.log(loginUserMsg("Sonakshi"))
console.log(loginUserMsg())
