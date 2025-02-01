const marvel_heros = ["Thor" , "IronMan" , "SpiderMan"]
const dc_heros = ['superMan' , "flash" , "Batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)

// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros ]  // Spread 

// console.log(all_new_heros);

const another_arrray = [1,2,[3,4,5],6,[7,8,[4,5]]]

const real_another_array = another_arrray.flat(Infinity)

console.log(real_another_array);



console.log(Array.isArray("SabyA"));
console.log(Array.from("SabyA"));
console.log(Array.from({name: "SabyA"}));   // intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3));




