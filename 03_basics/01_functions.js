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
//  console.log(loginUserMsg())

function calculateCartPrice(val1 , val2,...num1){  // ... -> rest operator spread operator
    return num1
}

console.log(calculateCartPrice(200 , 400 , 500 , 2000))

const user = {
    username: "Sonakshi",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username: "Sam",
    price : 399
})

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 400 , 500 , 1000]));

