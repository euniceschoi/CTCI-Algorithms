'use strict';

// Check Permutation
// Given two strings, write a method to decide if one is a permutation of the other.

// Solution 1
// sort both strings and then compare if they are equal
// Time Complexity: O(NlogN + MlogM)
// Space Compelxity: O(1) if able to modify original strings, O(N + M) otherwise

function permutation(string1, string2){
  if(string1.length != string2.length){
    return false;
  }

  let str1 = string1.split("");
  let str2 = string2.split("");

  // sort string using quicksort
  str1 = str1.sort().join('');
  str2 = str2.sort().join('');

  if(str1 === str2){
    return true;
  } else {
    return false;
  }
}

permutation('mad', 'adm');


// Solution 2
// create map using first string. loop through second string and subtract from map
// Time Complexity: O(N + M)
// Space Complexity: O(N)

function permutation2(string1, string2){
  if(string1.length != string2.length){
    return false;
  }

  let stringMap = new Map();

  for(let i=0; i<string1.length; i++){
    stringMap.set(string1[i], stringMap.get(string1[i]) + 1 || 1);
  }

  for(let j=0; j<string2.length; j++){
    let chars = stringMap.get(string2[j]);

    if(!chars){
      return false;
    } else if(chars === 1) {
      stringMap.delete(string2[j]);
    } else {
      stringMap.set(string2[j], chars-1)
    }
  }
  return stringMap.size === 0;
}

permutation2('act', 'cat');