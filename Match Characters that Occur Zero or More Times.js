let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));


// Only change code below this line
let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!'
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
console.log(result);