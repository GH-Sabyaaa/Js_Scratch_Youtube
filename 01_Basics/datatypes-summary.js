// Primitive

// 7 Types : String, Number, Boolean , null , undefined , Symbol , BigInt

 const score = 300
 const scorevalue = 300.3

 const isLogggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherid = Symbol('123' );
 
 console.log(id === anotherid);


 const bigNumber = 12542125512552555125n
 

 
// Reference (Non  primitive)
   
// Array , Objects , Functions

const heros = ["shaktiman", "spiderman" , "superman"]

 let myObj = {      // Object
    name: "SabyA",
    age: 20,
}


 const myFunction = function(){      // Function 
    console.log("Hello Bhai");
    
 }

 console.log(typeof bigNumber);  // bigint
 console.log(typeof outsideTemp);  // Type of null is Object...
 console.log(typeof myFunction);  // function
 console.log(typeof anotherid);  // symbol






 // ************************************* Memories ***********************************************


 // Stack (Primitive) , Heap (Non- Primitive)

  let x = "sabyasachidotcom"

  let y  = x
      y = "Helo ji"     // stack mein changes reference value mein karte hai


      console.log(x);
      console.log(y);
      
 

 let userone = {
   email: "xtz@anotherid.com",
    upi: "user@ybl"
 }

 let userTwo = userone

 userTwo.email = "xyz@gmail.com"    // Heap mein Changes Original Value mein a Karte hain

 console.log(userone.email);
 console.log(userTwo.email);
 