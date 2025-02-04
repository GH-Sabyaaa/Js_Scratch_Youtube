

let a = 500
// var c = 400
if (true) {
    let a = 10
  const b = 20
  var c = 30

}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
  const username = "SabyA"

  function two(){
    const website = "Youtube"
    console.log(username );
    
  }
    // console.log(website);
    two()

    
}

one()


if(true){
  const username = "Sabya"
  if (username === "Sabya") {
    const website = "Youtube"
    console.log(username + website);
    
  }
  // console.log(website);  Becoz Outside the Scope
  
}

// console.log(username);  // Same Outside Scope


// *********************************************** intersting **********************************

 function onlyone(number) {
  return number + 1;
  
 }

 onlyone(6)


 const addTwo = function(number){   // Not Valid
  return number + 1;
 }

