function maxSequence(arr) {
  // Your code here
  //deklarasiin dulu yang mau di loop
  let currentSum = 0;
  let largestSum = 0;
  
  for (let number of arr) {
    currentSum = Math.max(0, currentSum + number);
    largestSum = Math.max(largestSum, currentSum);
  }

  return largestSum;
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 5, -6])); //7
console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3])); //7
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 6, -6])); //8
console.log(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6])); //12
module.exports = maxSequence
