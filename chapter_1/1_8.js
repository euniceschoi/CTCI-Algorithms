"use strict";

// Zero Matrix
// Time Complexity: O(N*M)
// Additional Space: O(N)

function zeroMatrix(matrix){
  let n = matrix[0].length; //width N
  let m = matrix.length;    //height M
  console.log(matrix);

  let zeroArray = new Array();

  for(let i=0; i < n; i++){
    zeroArray.push(0);
  }

  for(let i=0; i < m; i++){
    for(let j=0; j < n; j++){
      if(matrix[i][j] === 0){
        matrix[i] = zeroArray;
        break;
      }
    }
  }

 console.log(matrix);

}

let matrix1 = new Array();
let subArray1 = new Array(0,1,1);
let subArray2 = new Array(1,1,1);
let subArray3 = new Array(2,2,2);
let subArray4 = new Array(3,3,3);

matrix1.push(subArray1);
matrix1.push(subArray2);
matrix1.push(subArray3);
matrix1.push(subArray4);

zeroMatrix(matrix1);