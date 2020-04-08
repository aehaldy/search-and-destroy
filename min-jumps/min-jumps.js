'use strict';

// Complete this algo
const minJumps = arr => {
  let jumps = 0;
  let arrIdx = arr.length-1;

  while (arrIdx > 0) {
    let newIdx = helperFunc(arr.slice(0, arrIdx+1));
    jumps++;
    arrIdx = newIdx;
  };
  return jumps;
};

const helperFunc = function (arr){ //[1, 1]
  //this will return an "min jump from index"
  let minIndex = arr.length-1;
  for(let i = arr.length-1; i >= 0; i--){
    let value = arr[i];
    let distanceToEnd = arr.length-1-i;
    if(value>= distanceToEnd){
      minIndex = i;
    }
  }
  return minIndex;
};



module.exports = minJumps

/*

NOTES
// test6 = [7, 2, 1, 1, 1, 1, 1, 1, 2] 3 steps
// test6 = [7, 2, 1, 1, 1, 1, 1, 1, 2] 6 steps

// test6 = [ 2] //finished
// test6 = [ 2, 2] //1 steps
// test6 = [1, 1, 2] //2 steps
// test6 = [1, 1, 1, 2] //3 steps
// test6 = [1, 1, 1, 1, 2] //4 steps
// test6 = [1, 1, 1, 1, 1, 2] //5 steps
// test6 = [1, 1, 1, 1, 1, 1, 2] //6 steps
// test6 = [2, 1, 1, 1, 1, 1, 1, 2] //6 steps
// test6 = [7, 2, 1, 1, 1, 1, 1, 1, 2] //2 steps

WORKING BACKWARDS
last index --> always going to need only 1 step to finish
previous index --> compare index's value to length to the end

jumpcounter function -
finder function - takes array, goal index - outputs index where 1 jump from goal index
main function - total jumps & calling helper function at current index until you reach index 0


MATHY STUFF

const test1 = [1,1];
  steps = 1
  length = 2
  sum = 2
  length/sum = 1
  length*sum = 4


const test2 = [6,3,2,1];
  steps = 1
  length = 4
  sum = 12
  length/sum = 3
  length*sum = 48

const test3 = [2,8,4,3,2,9,6,8];
  steps = 2
  length = 8
  sum = 42
  length*sum = 336

const test4 = [4,4,2,7,1,1,1,1,3,7,2];
  steps = 2
  length = 11
  sum = 33
  length/sum = 3
  length*sum = 363

const test5 = [2,4,1,1,2,3,7,1,1,3];
  steps = 4
  length = 10
  sum = 25
  length/sum = .4
  length*sum = 250

  sum increases, steps decrease
  length increases, steps increase

  length/sum = steps

*/
