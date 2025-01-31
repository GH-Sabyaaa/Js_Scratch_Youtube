// Dates 

let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(typeof mydate); // Object
// let myCreatedDate = new Date(2025,0,31)
// let myCreateDate = new Date(2025,0,31,5,3)
// let myCreateDate = new Date ("2025-01-31")
let myCreateDate = new Date ("01-31-2025")

// console.log(myCreateDate.toDateString());

let MytimeStamp = Date.now()

// console.log(MytimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

console.log(` The Day no. is ${newDate.getDay()} and the Month no. is ${newDate.getMonth() + 1}`);
newDate.toLocaleString('default', {
    weekday: 'narrow',
    timeZone:"long",
})