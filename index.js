function hasTargetSum(array, target) {
  // Write your algorithm here
    if (array.length < 2) {
      return false
    }
    for (let i = 0; i < array.length - 1; i++) {
       for (let j = i + 1; j < array.length; j++) {
        let sum = array[i] + array[j];
        if (sum === target) {
          return true;
        }
      }
    }
    return false
  }


/* 
  Write the Big O time complexity of your function here
  Quadratic time: 0(n²) -- since the function has a nested loop
*/

/* 
  Add your pseudocode here
  initialize an if statement where the length of the array should not be less than 2
  iterate through the array
  iterate through the nested array
  the sum of the elements from iteration one and two  should be equal to target to be true
  if not so return false
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
