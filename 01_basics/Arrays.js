const arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(arr[2])

arr.push(5)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(6)
console.log(arr)

arr.shift()
console.log(arr)

console.log(arr.includes(7))
console.log(arr.includes(3))
console.log(arr.indexOf(7))
console.log(arr.indexOf(3))

const newarr = arr.join()
console.log(arr)
console.log(newarr)
console.log(typeof newarr)


console.log("A ", arr)
const mn1 = arr.slice(1, 3)

console.log(mn1)
console.log("B ", mn1)

const mn2 = arr.splice(1, 3)
console.log("C ", arr)
console.log(mn2)


const marvel_heros = ["thor", "IronMan", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros)



const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Varun"))
console.log(Array.from("Varun"))
console.log(Array.from({name: "Varun"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


