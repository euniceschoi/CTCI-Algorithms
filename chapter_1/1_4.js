"use strict";

// Palindrome Permutation

// check if there is more than one letter with an odd count. If yes, false. If not, true.
// Time Complexity: O(N)
// Space: O(N)

function palindromePermutation(string){
  let str = string.toLowerCase();
  let set = new Set();
  for (let char of str) {
    if (char !== ' ') {
      if(set.has(char)) {
        set.delete(char);
      }
      else {
        set.add(char);
      }
    }
  }

  console.log( set.size <= 1);
}

palindromePermutation('Tact Coa');