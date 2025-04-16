// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// while (condition) {
    
// }

// do {
    
// } while (condition);


const num = [1, 2, 3, 4, 5]
for (const i of num) {
    console.log(i)
}

const map = new Map();

map.set('IN' , "India")//k:v
map.set('EN' , "England")

for(const [key, value] of map){
   // console.log(key)
};

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// } // object not itertable by for of use for in

const myObject = {
    js : 'JavaScript',
    cpp : 'C++',
    java : 'JAVA'
}

for(const key in myObject) {
    console.log(key);//key
    console.log(myObject[key]);//value
}// also work for Arrays

const arr = ["js", "java"]

for(const key in arr){
    console.log(key)
    console.log(arr[key])
}

// for (const key in map) {
//    console.log(key)
// }//not iteratable


// arr.forEach( (element) => {
//     console.log(element)
// });

// arr.forEach( function (val){
//     console.log(val)
// } )
// arr.forEach(printMe)

// function printMe(item){
//     console.log(item);
// }

// arr.forEach( (item, index, arra) => {
//     console.log(item, index, arra)
// } )


const myCoding = [
    {
        name : "js",
        Fname : "JavaScript"
    },
    {
        name : "java",
        Fname : "JAVA"
    },
    {
        name : "C",
        Fname : "C Programing"
    }
]


myCoding.forEach( item => {
    console.log(item.name)
    console.log(item.Fname)
} )


