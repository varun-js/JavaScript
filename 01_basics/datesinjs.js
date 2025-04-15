let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(typeof myDate)

// let myCreateDate = new Date(2025, 0, 23)
// let myCreateDate = new Date(2025, 0, 23, 5, 3)
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getMonth())
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())
// console.log(newDate.getSeconds())
// console.log(newDate.getMinutes())
// console.log(newDate.getUTCDate())

newDate.toLocaleString('default', {
    weekday: "long",

})

console.log(newDate);