// singleton
// Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = { 
    name: "Sonakshi",
    "full name":"Sonakshi Gupta",
    [mySym]: "mykey1",
    age: 18,
    location: "UP",
    email: "sonakshi@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "sonakshi23@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "sonakshi23088@gmail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


