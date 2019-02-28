const fs = require('fs')

let buffer = fs.readFileSync("./data/random.json");
let input = JSON.parse(buffer.toString());
let counts = {};

console.log("The input file length is : " + input.length);
for(let i = 0; i < input.length; ++i){
    let num = input[i];
    counts[num] = counts[num]? counts[num] +1 : 1;
}

let frequency = Object.keys(counts).map(key =>{
    return counts[key];
})

let ps = frequency.map(fre => {
    return fre/input.length;
})

let maxPossibleValue = 65535;

let chiSquared = 0;
let expectation = input.length/(maxPossibleValue + 1);

for(let i =0; i <= maxPossibleValue; ++i){
    let o = counts[i]? counts[i] : 0;
    chiSquared = chiSquared + Math.pow((o-expectation),2);
}

chiSquared = chiSquared/expectation;

console.log("The chi-squared output is : " + chiSquared);