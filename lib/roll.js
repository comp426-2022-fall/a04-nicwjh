export function roll(x, y, z){

let sum = 0;
var arr = [];

for(let i = 0; i < z; i++){ 
 arr.push(individualRoll(x,y));
} 

let out = {sides: x, dice: y, rolls: z, results: arr};
return out;
}

function individualRoll(x, y){
let sum = 0;
let roll = 0;
for (let i = 0; i < y; i++){
roll = Math.floor(Math.random() * x) + 1;
sum += roll;
}
return sum;
}

//console.log(JSON.stringify(roll(6, 2, 10)))
