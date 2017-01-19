'use strict';

// String Rotation
// Time Complexity: O(N)
// Additional space: O(N)

function isRotation(string1, string2){
  if(string1.length != string2.length){
    return false;
  }

  isSubstring(string1 + string1, string2);
}

function isSubstring(string1, string2){
  return string1.includes(string2);
}