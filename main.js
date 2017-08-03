var BasicCard = require("./BasicCard.js");

var ClozeCard = require("./ClozeCard.js");

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

var secondPresident = new ClozeCard(
    "Who was the first president of the United States?", "George Washington");

console.log("\n");

// "Who was the first president of the United States?"
console.log(firstPresident.front);

// "George Washington"
console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(secondPresident.cloze);

// " ... was the first president of the United States.
console.log(secondPresident.partial());

// "George Washington was the first president of the United States.
console.log(secondPresident.fullText());

console.log("\n");

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

//With the brokenCLoze, I have to create a function that includes an if statement that checks when these lines are passed. If not then the throw brokenCloze error is passed.
