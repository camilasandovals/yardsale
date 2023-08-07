// function filterPositiveNumbers(numbers) {
//   neg = numbers.filter((number) => number < 0)
//   return neg
// }

// const inputNumbers = [5, -2, 10, -8, 3, -6, 0, -1];
// const negativeNumbers = filterPositiveNumbers(inputNumbers);
// console.log(negativeNumbers); 


// function findLargestNumber(numbers) {
//   return Math.max(...numbers)
// }

// const inputNumbers = [5, 8, 2, 10, 3];
// const largestNumber = findLargestNumber(inputNumbers);
// console.log(largestNumber); // Output: 10

// function findMissingNumber(arr) {
//   arr.sort()
//   let start = arr[0]
//   for (let i =0; i < arr.length; i++){
//     if (start != arr[i]){
//       return start
//     }
//     start++
//   }
// }

// console.log(findMissingNumber([0, 1, 2, 4, 5])); // Output: 3
// console.log(findMissingNumber([3, 1, 0, 5, 2])); // Output: 4
// console.log(findMissingNumber([6, 4, 2, 0, 5, 1])); // Output: 3

// function findArrayIntersection(arr1, arr2) {
//   const interseccion = []
//   for (let i = 0; i < arr1.length; i++){
//     for (let j =0; j < arr2.length; j ++) {
//       if (arr1[i] === arr2[j]){
//         interseccion.push(arr1[i])
//       }
//     }
//   }
//   return interseccion
// }

// console.log(findArrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // Output: [3, 4, 5]
// console.log(findArrayIntersection([10, 20, 30], [30, 40, 50])); // Output: [30]
// console.log(findArrayIntersection([1, 2, 3], [4, 5, 6])); // Output: []


function generateFibonacci(n) {
  if (n === 1 ){
    return [0]
  }

  fibo = [0 , 1]
  let i = 0
  while(fibo.length < n){
    fibo.push(fibo[i] + fibo[i+1])
    i++
  }
  return fibo
}

console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(generateFibonacci(2)); // Output: [0, 1]
