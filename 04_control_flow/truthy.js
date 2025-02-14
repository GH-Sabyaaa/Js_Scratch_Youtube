const userEmail = []

if(userEmail){
    console.log("Correct");
}
else{
    console.log("Try Again");
    
}
    
// False => 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values "0",'false', " ", [], {}, funtion(){}

// if(userEmail.length === 0){
//     console.log("Array is Empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is EMpty");
    
}


// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 6
// val1 = null ?? 7
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

// console.log(val1);

// Ternary Operator

// condition ? true : false

const TeaPrice = 100
TeaPrice <= 10 ? console.log("Nice") : console.log("OverPriced");

