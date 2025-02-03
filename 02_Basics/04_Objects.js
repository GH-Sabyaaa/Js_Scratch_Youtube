// const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Roman"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"xyz@gmail.com",
    fullname:{
        userfullName:{
            firstName:"SabyA",
            lastName:"Nayak"
        }
    }
}
// console.log(regularUser);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
const obj4 ={5:"a", 6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

//Better approach SPREAD
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id:1,
        email:"xtz@dotcom"
    },
     {
        id:1,
        email:"xtz@dotcom"
    },
    {
        id:1,
        email:"xtz@dotcom"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys( tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Js",
    price: "Free",
    courseInstructer: "SabyA"
}

// course.courseInstructer

const {courseInstructer} = course  // Object Dstructure

console.log(courseInstructer);

//   JSON  // APis

//  {
//     "name": "Sabyasachi",
//     "age": "20",
//     "email": "xtzgamil.com"
//  }


[
    {},
    {},
    {}
]

