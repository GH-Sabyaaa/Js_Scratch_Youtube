function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("B");
    console.log("Y");
    console.log("A");
    
}

// sayMyName()

// function addTwoNumbers(num1,num2){   // Parametres
//     console.log(num1 + num2);
    
// }

function addTwoNumbers(num1,num2){   

    
    return num1 + num2
}
const result = addTwoNumbers(10,20) 

// console.log(result);


function loggeduser(username) {
    if(!username){
        console.log("Please enter a valid UserName");
        return
    }
    return `${username} Hello Boss.!`
}

// console.log(loggeduser());


function calculateCartPrice(...num1){  //   ...  => Rest Operator
    return num1
}

// console.log(calculateCartPrice(100,200,300,11500));

function handleObject(anyObject){
    console.log(` Username is ${anyObject.username} and my Tribe is ${anyObject.Tribe}`);
    
}

handleObject(
    {
        username:"Tribal Cheif",
        Tribe: "BloodLine"
    }
)

const myNewArray = [100,200,600,800]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray));
