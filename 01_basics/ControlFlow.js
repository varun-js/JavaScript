if(1<2){
 console.log("hi")
}
if(1<2) console.log("hi")


//if else

//switch
const month = 3
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;

    default:
        console.log("Default")
        break;
}


//Nullish Coalecing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
val2 =  undefined ?? 10 ?? 20
console.log(val1);
console.log(val2);

//ternary
//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80")

