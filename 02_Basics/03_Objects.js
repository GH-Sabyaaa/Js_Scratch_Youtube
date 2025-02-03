// singleton



// Object.create

// object Literals

const mysym =Symbol("YTC")
const jsUser = {
    name: "SabyA",
    "Full Name":"Sabya Nayak",
    [mysym] : "OTC",
    age: 20,
    location:  " Bhadrak",
    email:"xtz@google.com",
    isLoggedIN: false,
    lastLoginDays: ["Monday", "Friday"]


}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Full Name"]);
console.log(jsUser[mysym]);


jsUser.email = "xtz@goggle1.com"
// Object.freeze(jsUser)
jsUser.email = "xyz@goggle.com"
// console.log(jsUser);


jsUser.greeting =  function() {
    console.log("Hola Amigo");
    
}
jsUser.greeting2 =  function() {
    console.log(`Helo Bhai ${this.name} , Big Fan .! Big Fan .!`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
