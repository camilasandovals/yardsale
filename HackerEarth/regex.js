const items = ""

function solution(items) {
  const regex = /[-+]?\d+(\.\d+)?/g;
  
  const numbersArray = items.match(regex)
  
  let sum = 0 
    for (let i =0; i < numbersArray.length; i++)
    sum = Number(numbersArray[i]) + sum    
  
  return sum
  
}

console.log(solution(items))