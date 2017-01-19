"use strict";

// Rotate Matrix
// Time Complexity: O(N^2)

function rotateMatrix(matrix){
  var rmatrix = JSON.parse(JSON.stringify(matrix));
  let width = matrix[0].length;
  let height = matrix.length;

  if(width != height){
    return false;
  }

  for(var i=0, j=(width-1); i < width, j >= 0; i++, j--){
    for(var k=0; k< width; k++){

      var value = matrix[i][k];
      rmatrix[k][j] = value;
    }
  }

 console.log(rmatrix);

}

let matrix1 = new Array();
let subArray1 = new Array(0,1,2);
let subArray2 = new Array(0,1,2);
let subArray3 = new Array(0,1,2);

matrix1.push(subArray1);
matrix1.push(subArray2);
matrix1.push(subArray3);

rotateMatrix(matrix1);