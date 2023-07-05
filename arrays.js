N = 5
start = 4
finish = 3
Ticket_cost = [12, 6, 2, 6, 2]

// N = 4
// start = 1
// finish = 3
// Ticket_cost = [1, 2, 3, 4]

// 10
// 5
// 3
// 4 14 10 7 3 13 5 15 13 4

// N = 15
// start = 1
// finish =8
// Ticket_cost = [14, 20, 7, 14, 21, 18, 13, 2, 7, 1, 5, 16, 5, 10, 14]

solve()
function solve() {
    let direct = 0
    let reverse = 0
    
    if (start > finish) {

        let c = start
        start = finish
        finish = c
    }

    for (let i = start-1; i < finish-1; i++) {
        direct = direct +  Ticket_cost[i]
    }
    
    

    let i = finish-1
    let x = 1
    while (x === 1) {

        if (i === start-1) {
            x = 0
        }

        else {
            reverse = reverse + Ticket_cost[i]
            i++
            
            if (i === Ticket_cost.length) {
                i=0
            }
        }
    }

    if (reverse > direct) {
        console.log(direct)
    } else {
        console.log(reverse)
    }
}
