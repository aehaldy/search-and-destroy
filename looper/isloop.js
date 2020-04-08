'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  const cache = {};

  let currentNode = linkedlist.head;

  while (currentNode !== null) {
    if (cache[currentNode.value]) {
      return true;
    } else {
      cache[currentNode.value] = currentNode.value;
    }
    currentNode = currentNode.next;
  }
  return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop


/*
//step through linked list "next" values
//cache the values in an obj
//which can allow us to check for dups
//As soon as we find a dup, we'll return true, for loopy
//otherwise, keep traversing
//if reach next===null, return false

//base case------
thisNode.next === null, return false

//otherwise------
//check cache for value, if not, add to cache
isLoop(thisNode.next) --value is the next node

*/
