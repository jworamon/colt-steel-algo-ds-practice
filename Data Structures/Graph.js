// undirected grapher
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(v => v !== vertex1);
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }
    DFSRecursive(startingVertex) {
        const result = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;
        const DFS = (vertex) => {
            if (!vertex) return;
            visited[vertex] = true; 
            result.push(vertex);

            const neighbors = adjacencyList[vertex];
            for (let neighbor of neighbors) {
                if (!visited[neighbor]) DFS(neighbor);
            }
        }
        DFS(startingVertex);
        return result;
    }
    DFSIterative(startingVertex) {
        const result = [];
        let visited = {};
        const stack = [startingVertex];

        while (stack.length) {
            let current = stack.pop();
            if (!visited[current]) {
                result.push(current);
                visited[current] = true;

                const neighbors = this.adjacencyList[current];
                for (let neighbor of neighbors) {
                    if (!visited[neighbor]) stack.push(neighbor);
                }
            }
        }
        return result;  
    }
    BFS(startingVertex) {
        const result = [];
        let visited = {};
        const queue = [startingVertex];

        while(queue.length) {
            let current = queue.shift();
            if (!visited[current]) {
                result.push(current);
                visited[current] = true;
            }

            const neighbors = this.adjacencyList[current];
            for (let neighbor of neighbors) {
                if (!visited[neighbor]) queue.push(neighbor);
            }
        }
        return result;
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");