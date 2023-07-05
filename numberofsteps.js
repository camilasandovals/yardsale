let n = 5
let a = [ 5, 7, 10, 5, 15 ]
let b = [ 2, 2, 1, 3, 5 ]
functionName(n, a, b)
function functionName(n, a, b) {
    count = 0
    while (count <=20) {
         for (let i = 0; i < n; i ++) {
            if (a[i] >= b[i]){
                a[i] = a[i] - b[i]
            }
        }
    console.log(count, a)
    
        count ++
    }
   
}