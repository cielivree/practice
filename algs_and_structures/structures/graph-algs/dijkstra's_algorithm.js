// Searches the shortest way

const graph = {}

graph.a = { b: 2, c: 1 }
graph.b = { f: 7 }
graph.c = { d: 5, e: 2 }
graph.d = { f: 2 }
graph.e = { f: 1 }
graph.f = { g: 1 }
graph.g = {}

function findNodeShortestWay(points, processed) {
    let shortestPoint = 100000000
    let shortestNode;

    Object.keys(points).forEach(node => {
        let point = points[node]

        if (point < shortestPoint && !processed.includes(node)) {
            shortestPoint = point
            shortestNode = node
        }
    })

    return shortestNode
}

function shortestWay(graph, start, end) {
    const points = {}
    const processed = []
    let neighbours = {}

    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            points[node] = value || 100000000
        }
    })

    let node = findNodeShortestWay(points, processed)

    while (node) {
        const point = points[node]
        neighbours = graph[node]
        
        Object.keys(neighbours).forEach(neighbour => {
            let newPoint = point + neighbours[neighbour]
            if (newPoint < points[neighbour]) {
                points[neighbour] = newPoint
            }
        })

        processed.push(node)
        node = findNodeShortestWay(points, processed)
    }

    return points
}

console.log(shortestWay(graph, 'a', 'g'))   // {b: 2, c: 1, d: 6, e: 3, f: 4, g: 5}

