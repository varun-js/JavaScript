// const tinderUser = new Object()//singalton object
const tinderUser = {}//non singalton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        firstname: "sammy",
        middlename: "domy",
        lastname: "romy"
    }
}

// console.log(regularUser.fullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)



const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 2,
        email: "2@gmail.com"
    },
    {
        id: 3,
        email: "3@gmail.com"
    },
    {
        id: 4,
        email: "4@gmail.com"
    },
    {
        id: 5,
        email: "5@gmail.com"
    }
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "js in kannada",
    price: "999",
    courseInstructor: "hitesh"
}

const {Instructor} = course
console.log(Instructor) 