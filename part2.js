//Question 1


function theNums(){
let zero = false;
let arr = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) { 
    if(arr[i] + arr[j] === 0) {
      zero = true;
      break;
    } 
  } 
}
return zero;
}

console.log(theNums([1, 2, 3]))

//I believe the runtime of my code to be O(n^2)

//Question 2

function checkForDups(enteredWord){
  var x = enteredWord.split("");
  
  let y = new Set(x);
  
  if(y.size === x.length){
    return true;
  }else{
    return false;
  }
}

let input = checkForDups("cat");
let input2 = checkForDups("mongoose");
console.log(input);
console.log(input2);

//I believe the runtime of my code to be 

//Question 3


function isItApangram(sentence) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let x = /\s/g;
    let y = sentence.toLowerCase().replace(x, "");
   
    for(let i = 0; i < alpha.length; i++){
     if(y.indexOf(alpha[i]) === -1){
       return false;
     }
    }
   
   return true;
 }
 console.log(isItApangram("The quick brown fox jumps over the lazy dog."));
console.log(isItApangram("I like cats, but not mice"))

//I believe the runtime of my code to be O(n)

//Question 4


function findLongestWord(arr) {
    var longWord = "";
  
    arr.forEach(function(givenWord) {
      if(givenWord.length > longWord.length) {
        longWord = givenWord;
      }
    });
  
    return longWord.length;
  }
  
  let givenWord = findLongestWord(["hi", "hello"]);
  console.log(givenWord);

  //I believe the runtime of my code to be 
  
