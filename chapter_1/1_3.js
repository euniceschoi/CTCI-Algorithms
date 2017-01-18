'use strict';

// URLify
// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.
// Input: "Mr   John   Smith     ", 13
// Output: "Mr%20John%20Smith"
// Time Complexity: O(N)
// Space: O(1)

// Solution
function URLify(string){
  let finalString = ""

  for(let i=0; i<string.length; i++){
    if(string[i] != ' '){
      finalString += string[i];
    } else if((string[i] === ' ') && (string[i+1] != ' ') && (i != string.length-1)){
      finalString += '%20';
    }
  }

  console.log(finalString);
}

URLify('Mr  John  Smith     ');




