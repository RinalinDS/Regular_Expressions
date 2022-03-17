let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex);
console.log(result);

console.log(/[^0-9]/.test(' ')); // probel
console.log(/\D/.test(' ')); // probel