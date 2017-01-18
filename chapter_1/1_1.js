'use strict';

// Is Unique
// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?


// Solution 1:
// create a set and loop through the string. Check if character exists in set. If yes, return false. If not, add character.
// Time: O(N)
// Additional Space: O(N)

function isUnique1(string){
  let charsSet = new Set();

  for(let i = 0; i < string.length; i++){
    if(charsSet.has[string[i]]){
      return false;
    } else {
      charsSet.add[string[i]];
    };
    return true;
  }
}

isUnique1('cat');

// Solution 2:
// sort the string and check neighboring character. If duplicated, then return false.
// Time: O(N logN)
// Space: O(1)

function isUnique2(string){
  let stringArray = string.split("");
  let sortedString = stringArray.sort();

  for(let i = 0; i < stringArray.length; i++){
    if(string[i] === string[i+1]){
      return false;
    }
    return true;
  }
}

isUnique2('cat');