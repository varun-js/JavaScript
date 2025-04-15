//object litrels

const mySym = Symbol("key1")

const JsUser = {
    name: "Varun",
    "full name": "Varun J S",
    [mySym]: "mykey1",
    age: 22,
    email: "varun@gmail.com",
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(typeof mySym)

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email ="Varun2@gmail.com";
// Object.freeze(JsUser)//dont allow to change
JsUser.email ="Varun3@gmail.com";

console.log(JsUser)

JsUser.greetings = function(){
    console.log("Hello JS user")
}

console.log(JsUser.greetings())


JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greetingsTwo())