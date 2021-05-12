// Closure
// In your own words, define closure (1-2 sentences).


//A function that only exists in the scope of the function over it. It has acces to parameters in the scope above it.




// Study the following code, then answer the questions below.
function personalDice(name){
  return function(){
      // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`)
  }
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");


 dansRoll();
 dansRoll();
// a. Where is closure used in this code? How can you tell?

//The closure is inside the first line of the personalDice function. There we return a function that only works in that scope.

// b. Compare and contrast calling dansRoll the first and second time. What is always the same? What could change?

//  the random outcom of the dice roll could change. The rest will stay the same because you always give the argument("Dan") into the function

// c. What is the lexical scope of newRoll? this might help https://stackoverflow.com/questions/1047454

//the scope is withtin the return function of personalDice

// Write a function that would allow you to do this using a closure.
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27
var addSix = createBase(6)

function createBase(a){
    return function(b){
        return a+b
    }
}

console.log(addSix(10))
console.log(addSix(21))