let reg = /t[a-z]*i/
console.log("titanic".match(reg));

let reg2 = /t[a-z]*?i/
console.log('titanic'.match(reg2));



let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex)
console.log(result);