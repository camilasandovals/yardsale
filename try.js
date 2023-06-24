    let lines =  [
        '2',   '3 2', '1 2',
        '2 3', '4 4', '1 2',
        '2 3', '3 4', '4 2'
    ]
    const testCases = parseInt(lines[0], 10); 
    console.log("new lines", lines)
    console.log("testCases = ", testCases)

    let lineIndex = 1;
    for (let t=0; t < testCases; t++) {
        console.log("t",t)
        const [nodes, edges] = lines[lineIndex++].split(' ').map(Number);
        console.log("nodes",nodes)
        console.log("edges",edges)

    const graph = new Array(nodes + 1).fill().map(() => []);
    
    for (let e=0; e <edges; e++){
    const [u, v] = lines[lineIndex++].split(' ').map(Number)
    graph[u].push(v);
    graph[v].push(u);
    }

    const minEdges = bfs(graph, 1, nodes);
    console.log("final answer",minEdges);
    }


function bfs(graph, source, nodes) {
  const visited = new Array(nodes + 1).fill(false);
  const queue = [];
  const distance = new Array(nodes + 1).fill(-1);

  visited[source] = true;
  distance[source] = 0;
  queue.push(source);

  while (queue.length > 0) {
    const node = queue.shift();

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        distance[neighbor] = distance[node] + 1;
        queue.push(neighbor);
      }
    }
  }

  return distance[nodes];
}