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


