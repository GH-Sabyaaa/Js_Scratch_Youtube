const name = "Your"
const position = "Tribal Chief"

// console.log(name + name1 );

                 // ${} This Sign Concatinate two Strings...
 console.log(`Hey Kid I am ${name} ${position.toUpperCase()} and You Have to Acknowledge Me .!`);

 const gameName = new String('Soccer')

 console.log(gameName[0]);
 console.log(gameName.__proto__);
 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(4));
 console.log(gameName.indexOf('c'));
 

 const newString = gameName.substring(0,4)  // Ye Last element nhi count karta.. i Mean it goes till index 4
 console.log(newString);

 const anotherstring = gameName.slice(-6,3)
 console.log(anotherstring);
 
 
 const newStringOne = "  YTC  "
 console.log(newStringOne);
 console.log(newStringOne.trim());
 
 const url = "https://SabyA.com/SabyA*Nayak"
 console.log(url.replace('*' , '_'));
 console.log(url.includes('YTC'));
 


