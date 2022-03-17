let jennyStr = "Jenny8675309";
let Regex = /[a-z0-9]/gi;
console.log(jennyStr.match(Regex));


let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex);

console.log(result)