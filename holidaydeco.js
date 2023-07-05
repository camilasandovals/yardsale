process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = '';
process.stdin.on('data', function (data) {
  input += data;
});

process.stdin.on('end', function () {
    const lines = input.split("\n");
   
});

const N = 3;
const M = 3;
const K = 3;
const A = [1, 2, 3];
const P = [2];
const repainting = [
    [2, 1],
    [3, 1],
    [2, 2]
];

console.log(calculateBeauty(N, M, K, A, P, repainting));



// helper function to add an edge between two nodes
function addEdge(adj, u, v) {
    adj[u].push(v);
    adj[v].push(u);
}

function calculateBeauty(N, M, K, A, P, repainting) {
    // create adjacency list
    const adj = Array.from({length: N+1}, () => []);

    // add edges according to P
    for (let i = 0; i < P.length; i++) {
        addEdge(adj, P[i], i + 2);
    }

    // add the first edge
    addEdge(adj, 0, 1);

    // keep track of the color of each bulb
    const colors = [0, ...A];

    // keep track of connected bulbs of the same color
    const sameColorPairs = Array.from({length: N+1}, () => new Map());

    for (let i = 1; i <= N; i++) {
        const color = colors[i];
        sameColorPairs[i].set(color, (sameColorPairs[i].get(color) || 0) + adj[i].filter(j => colors[j] === color).length);
    }

    const beautyResults = [];

    for (let i = 0; i < M; i++) {
        const [bulb, newColor] = repainting[i];

        // remove old color connections
        const oldColor = colors[bulb];
        sameColorPairs[bulb].set(oldColor, 0);
        adj[bulb].forEach(j => sameColorPairs[j].set(oldColor, (sameColorPairs[j].get(oldColor) || 0) - 1));

        // add new color connections
        colors[bulb] = newColor;
        sameColorPairs[bulb].set(newColor, (sameColorPairs[bulb].get(newColor) || 0) + adj[bulb].filter(j => colors[j] === newColor).length);
        adj[bulb].forEach(j => sameColorPairs[j].set(newColor, (sameColorPairs[j].get(newColor) || 0) + 1));

        // calculate beauty
        let beauty = 0;
        for (let j = 1; j <= N; j++) {
            for (let pair of sameColorPairs[j].values()) {
                beauty += pair;
            }
        }
        beautyResults.push(beauty / 2);
    }

    return beautyResults;
}
