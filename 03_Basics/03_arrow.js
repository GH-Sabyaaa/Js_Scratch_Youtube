const user  = {
    username: "SabyA",
    price: 222 ,  

    welccomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welccomeMessage()
// user.username = " OTC "
// user.welccomeMessage()

// console.log(this);


// function chai (){
//     let username = "SabyA"
//     console.log(this.username);
    
// }

// chai()

//   const chai =  () => {
//     let username = "OTC"
//     console.log(this.username);
    
// }

// chai()


// Arrow FUnction 

// const addTwo = (num1 , num2 ) => {
//    return num1 + num2
// }

// console.log(addTwo());

// Inplicit FUntions

// const addTwo = (num1,num2) => num1 + num2

const addTwo = (num1,num2) => (num1 + num2)

console.log(addTwo(1,2));



// const myArray = [1,2,3,4]

// myArray.forEach()
