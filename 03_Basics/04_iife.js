// Immediately Invoked FUnction Expressions (IIFE)


// Why IIFE is Used .?
// => Immmediatly Call Function and Global Scope ke Pollution se Problem hoti hai kayi bar.. So Us Global Scope ke Pollution ya Declaration ko Hatane ke liye IIFE use Hota Hai

(function chai(){
    console.log(`HELLO`);
    
}) () ;

( () => {
    console.log(`HELLO BHAI!`);
    
})()





// How js Works Behind the scens..(IMP)

// 1. Global Ececution Phase => this 
// 2. Memory Phase => Like It Takes All Variables and Stores Undefined 
// 3. Execution Phase => Stores all Values of the Variables