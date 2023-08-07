const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [['PHX', 'LAX'], ['PHX', 'JFK'], ['JFK', 'OKC'], ['JFK', 'HEL'], ['JFK', 'LOS'], ['MEX', 'LAX'], ['MEX', 'BKK'], ['MEX', 'LIM'], ['MEX', 'EZE'], ['LIM', 'BKK']];

const adjacencyList = new Map();

function addNode(airport) {
    adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);

routes.forEach(route => addEdge(...route));

console.log(adjacencyList);


// --------------BREADTH FIRST SEARCH---------------
// find all the possible routes to determine which is the best one 
// this uses queue

function bfs(start) {
    const visited = new Set();
    const queue = [start]

    while(queue.length > 0) {
        console.log("visited", visited)
        console.log("queue.leng" , queue.length)
        console.log("queue" , queue)
        const airport = queue.shift();
        console.log(airport)
        const destinations = adjacencyList.get(airport);
        for (const destination of destinations) {
            console.log("destination" , destination)
            if (destination === 'BKK') {
                console.log(destination, 'found it')
            }
            if (!visited.has(destination)) {
                console.log("current visited", visited)
                visited.add(destination);
                console.log(destination , "is added to de visited")
                console.log("visited added destination", visited)
                console.log("current queue", queue)
                queue.push(destination)
                console.log(destination, "is added to the queue")
                console.log( "queue", queue)
            }
        }
    }
}

bfs("PHX")


// --------------DEPTH FIRST SEARCH---------------
// The only concern is that the route exists, not care if multiple, not care if it is the best, just find the route as quick as possible
//this uses recursive function

function dfs(start, visited = new Set()) {
    console.log("start", start)

    visited.add(start)

    const destinations = adjacencyList.get(start)

    for (let destination of destinations) {

        if (destination === 'BKK') {
            console.log("BKK found")
            return
        }

        if(!visited.has(destination)) {
            dfs(destination, visited)
        }
    }
}

dfs("PHX")


// time complexity O (Nodes + edges)
//the time performance of the algorithm will scale linear based on the number of nodes and edges