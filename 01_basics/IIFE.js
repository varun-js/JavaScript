//Immediately Invoked Function Expression (IIFE)

//named IIFE
(function chai(){
    console.log(`db connected`);
})();//madatary ; to run next fun
//avoid the pollution of global scope

//unamed IIFE
( (name) =>{
    console.log(`db connected Tow ${name}`)
})("Varun");

//hi
