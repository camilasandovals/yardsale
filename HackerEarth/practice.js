let C = [2 , 1, 0 , 0]
let queue = []
let solution = []
for (let i = 0; i < C.length; i++) {
    if (C[i] > 0) {
        queue.push(C[i])
    }

    if(C[i] === 0 ) {
        solution.push(queue.pop())
    }
}
return solution
