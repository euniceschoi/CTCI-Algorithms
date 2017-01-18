"use strict";

// String Compression

// Create a map. loop through string and set char as map[key] = 1 if char doesn't exist yet as key or += 1 if already exists.
// Loop through map and add key and value to the final string

// Loop through string, set a variable to letter. until the letter doesn't equal the variable, set a counter to increase by 1. Then change the variable to new letter

// time: O(N);
// space: O(N); storing string

function compressString(string){
  let compressedString = "";

  let currentLetter = "";
  let counter = 0;

  for(let i =0; i<string.length; i++){
    if(string[i] === currentLetter){
      counter ++;
    }else{
      if(i>0){
        compressedString = compressedString + currentLetter + counter;
      }
      currentLetter = string[i]
      counter = 1;
      if(i === (string.length -1)){
        compressedString = compressedString + currentLetter + counter;
      }
    }
  }
  return compressedString.length < string.length ? compressedString : string;
}

compressString("aaabbc")