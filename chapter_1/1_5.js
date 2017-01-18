"use strict";

// One Away

// Solution 1
// if string lengths difference is greater than 1, return false
// Look through both strings
//      if first difference
//          if lengths are difference, it's a removal from longer string
//          ff lengths are same, it's a replacement
//      if second difference
//          return false

// N = max
// Time: O(N)
// space: O(1);

function oneAway(string1, string2){
  if(Math.abs(string1 - string2) >1){
    return false;
  }

  let foundDifference = false;

  for(let i=0, j=0; i<string1.length, j<string2.length; i++, j++){
    if(string1[i] != string2[j]){
      if(foundDifference){
        return false
      };

      if(string1.length > string2.length){
        --j;
      }else if(string2.length > string1.length){
        --i;
      };

      foundDifference = true;
    }
  }
    return true;

}
