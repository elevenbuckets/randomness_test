
const fs = require('fs')
const inputPath = process.argv[2]? process.argv[2] : "./data/random.json";
console.log(inputPath);

let buffer = fs.readFileSync(inputPath);
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

console.log("The unique number count is: " + frequency.length);

let entropy = 0;
for(let i=0; i < ps.length; i++){
    entropy = entropy - ps[i] * Math.log(ps[i]);
}

entropy = entropy/Math.log(input.length);

console.log("The entropy is: " + entropy );



