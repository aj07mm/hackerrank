var assert = require ('assert'),
    fixthecycles = require('./fixthecycles').fixthecycles,
    getPossiblePathways = require('./fixthecycles').getPossiblePathways

// describe('fixthecycles', function() {
//     it('1 empires', function () {
//         var edges = [2, -5, 0, 1, 1, 1];
//         assert.equal(fixthecycles(edges), null)
//     })
// })


//doesn't matter, 
// i want all possible paths
describe('getPossiblePathways', function() {
	var graph = {
			A: ['B', 'C'],
			B: ['D', 'C'],
			C: ['D'],
			D: ['A']
		},
		edges = [2, -5, 0, 1, 1, 1];
    it('AA', function () {
        var begin 	= 'A',
        	end 	= 'A',
        	possiblePathways = [];

        assert.deepEqual(getPossiblePathways(graph, begin, end), possiblePathways)
    })
    it.only('AB', function () {
        var begin 	= 'A',
        	end 	= 'B',
        	possiblePathways = [
        		['A','B'],
        		['A','C','D','A','B']
        	];

        assert.deepEqual(getPossiblePathways(graph, begin, end).sort(), possiblePathways.sort())
    })
    it('BC', function () {
        var begin 	= 'B',
        	end 	= 'C',
        	possiblePathways = [
        		['B','C']
        	];

        assert.deepEqual(getPossiblePathways(graph, begin, end).sort(), possiblePathways.sort())
    })
    it('AC', function () {
        var begin 	= 'A',
        	end   	= 'C',
        	possiblePathways = [
	        	['A','C'],
	        	['A','B','C']
        	];

        assert.deepEqual(getPossiblePathways(graph, begin, end).sort(), possiblePathways.sort())
    })
    // it('AB', function () {
    //     var begin 	= 'A',
    //     	end   	= 'D';
    //     	//possible pathways:
    //     	// e + d = 1 + 1 = 2
    //     assert.equal(getPossiblePathways(graph, edges, begin, end), 2)
    // })
    // it('AB', function () {
    //     var begin 	= 'A',
    //     	current = 'A',
    //     	end   	= 'D';
    //     	//possible pathways:
    //     	// AC CD 1 + 1 
    //     assert.equal(getPossiblePathways(graph, edges, begin, end), 2)
    // })
})