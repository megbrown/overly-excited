// Stacking Words
console.log("Stacking words");
// Create an addExcitement function that should console.log() rows of words. 
// It should take an array containing the words of a sentence and output them in the 
// developer console.

// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
var stacker = [];
// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
     	for (i=0; i < sentence.length; i++) {
     		stacker += sentence[i] + " ";
     		console.log(stacker);
     	}
}

// Invoke the function and pass in the array
addExcitement(sentence)

// Adding Conditions to the Loop
console.log("Adding conditions to the Loop");

// Then add logic to addExcitement that places an exclamation point (!) after every 
// third word. This will require you to do some basic math in JavaScript, 
// and use an if statement.

// Your job is to read the following English statement and write the equivalent in 
// JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 - using 
// the JavaScript remainder operator - then add a single exclamation point (!) to the output.
var excitedStacker = [];
function addMoreExcitement (theWordArray) {
      for (i=0; i < sentence.length; i++) {
        if ((i % 3) === 0 && i !== 0) {
          excitedStacker += sentence[i] + "! ";
        } else {
          excitedStacker += sentence[i] + " ";
        }
        console.log(excitedStacker);
      } 
}
addMoreExcitement(sentence)

// Challenge
console.log("Challenge");

// Add logic in the addExcitement function to the increase the number of exclamation 
// points after every third word. The number of exclamation points (!) will be 
// determined by how many times the counter variable can be divided by 3.
var moreExcitedStacker = [];
function addEvenMoreExcitement (theWordArray) {
      for (i=0; i < sentence.length; i++) {
      if ((i % 3) === 0 && i !== 0) {
        var numberOfExclamationPoints = i / 3;
        moreExcitedStacker += sentence[i] + numberOfExclamationPoints + "! ";
      } else {
        moreExcitedStacker += sentence[i] + " ";
      }
      console.log(moreExcitedStacker);
    } 
}
addEvenMoreExcitement(sentence)









