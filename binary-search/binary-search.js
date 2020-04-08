'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	//base cases - 2
	if(array.length === 0){
		return false;
	}
	if(array.length === 1){
		if(array[0]=== target){
			return true;
		} else{
			return false;
		}
	}
	//not base case
	let mid = Math.floor(array.length/2);
	if(target < array[mid]){
		let leftHalf = array.slice(0, mid);
		return binarySearch(leftHalf, target);
	}
	else if(target === array[mid]){
		return true;
	}
	else{
		let rightHalf = array.slice(mid);
		return binarySearch(rightHalf, target);
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch

//NOTES
// take given array & see if the middle point is < , > = the target
// if target < midpoint --> looking at only the left half of original array
// keep dividing array in this manner until you have 1 element
// not base case (recursive)--> call the function on the halved side we're still focusing on
// base cases --> 1.) is the array empty? --> return false
//                2.) is this one element === target?
//                     if yes --> return true, if no---> return false
// [ 1 , 4] arr.length = 2 , mid = 1
