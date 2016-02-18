// NOTE:

// In mathematics, and more specifically in graph theory, 
// a directed graph (or digraph) is a graph, 
// or set of vertices connected by edges, 
// where the edges have a direction associated with them.

// PROBLEM:

// when added to one single edge weight in the graph, 
// will get rid of ANY! negative cycles.

'use strict'

var fixthecycles = function (edges) {
	var p,
		graph = {
			A: ['B', 'C'],
			B: ['D', 'C'],
			C: ['D'],
			D: ['A']
		};

		return getPossiblePathways(graph, edges, 'A', 'A')

};


var getDistance = function(edges, nodeNameA, nodeNameB){
	return {
		DA: edges[0],
		AB: edges[1],
		BC: edges[2],
		CD: edges[3],
		AC: edges[4],
		BD: edges[5]
	}[nodeNameA + nodeNameB];
}

//possiblePathways
var getPossiblePathways = function(graph, begin, end){
	var possiblePaths = [],
		possiblePath = [];

	if(begin == end){
		return possiblePath;
	}

	var current = begin; //A
	possiblePath.push(current); //[A]
	while(current != end){
		var nextStep = graph[current]; //[B,C]
		if(Array.isArray(nextStep)){
			//Ramification
			for (var i = nextStep.length - 1; i >= 0; i--) {
				var ramificationPath = possiblePath;
				current = nextStep[i];
				ramificationPath.push(current);
				possiblePaths.push(ramificationPath);
				console.log(possiblePath)
			};
			break;
		}
	}

	possiblePaths.map(function(arr){
		arr.sort()
	})
	return possiblePaths;
}

exports.fixthecycles = fixthecycles;
exports.getPossiblePathways = getPossiblePathways;