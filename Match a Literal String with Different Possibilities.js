let petString = "James has a pet cat.";
let petString2 = "James has a pet fish.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
let result1 = petRegex.test(petString2);
console.log(result, result1)