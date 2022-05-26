const prompt = require('prompt-sync')({sigint: true});
let num1 = Number(prompt("How many sides should the die have?"));


console.log(Math.ceil(Math.random()*num1));