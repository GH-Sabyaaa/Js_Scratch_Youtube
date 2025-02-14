// for of 

// ["","",""]
// [{},{},{}]

const arr = [ 1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = " Hola Bhai!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('Kiwi',"New ZeaLand")
map.set('Aus',"Austrlia")

// No Repeated Value

// Map is not work in ForIn Loop as it Doesnot Itereates

// console.log(map);

for (const [key,Value] of map) {
    // console.log(key, ':-', Value);
    
}
