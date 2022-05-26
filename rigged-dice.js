const prompt = require('prompt-sync')({sigint: true});
let rig = Number(prompt("What number on the six sided die should we rig?"));

let roll = (Math.ceil(Math.random()*7)); //this number will be from 1-7

//change the 6 sided die to 7 to 
/* 1 = 1/7
2 = 1/7
3 = 1/7
4 = 1/7
5 = 1/7
6 = 2/7
*/

// rolling a 7 sided die vs 6 as (*6) calls for in code. If you roll a 7 the else will call for it to just roll the regular dice
if (roll === 7){
    console.log(rig);
} else {
    console.log(roll);
}