var assert = require ('assert'),
    graphToArray = require('./graphToArray').graphToArray;

describe('graphToArray', function() {
    it('1 node', function () {
        var listNode = {
        	val: 1,
        	next: null
        }
        assert.deepEqual(graphToArray(listNode, []), [1])
    })
    it('2 nodes', function () {
        var listNode = {
        	val: 1,
        	next: {
	        	val: 2,
	        	next: null
	        }
        }
        assert.deepEqual(graphToArray(listNode, []), [1, 2])
    })
    it('2 nodes.2', function () {
        var listNode = {
        	val: 1,
        	next: {
	        	val: 3,
	        	next: null
	        }
        }
        assert.deepEqual(graphToArray(listNode, []), [1, 3])
    })
    it('3 nodes', function () {
        var listNode = {
        	val: 1,
        	next: {
	        	val: 3,
	        	next: {
		        	val: 4,
		        	next: null
		        }
	        }
        }
        assert.deepEqual(graphToArray(listNode, []), [1, 3, 4])
    })
    it('4 nodes', function () {
        var listNode = {
        	val: 1,
        	next: {
	        	val: 2,
	        	next: {
		        	val: 3,
		        	next: {
			        	val: 4,
			        	next: null
			        }
		        }
	        }
        }
        assert.deepEqual(graphToArray(listNode, []), [1, 2, 3, 4])
    })
    it('5 nodes', function () {
        var listNode = {
        	val: 1,
        	next: {
	        	val: 2,
	        	next: {
		        	val: 3,
		        	next: {
			        	val: 4,
			        	next: {
				        	val: 5,
				        	next: null
				        }
			        }
		        }
	        }
        }
        assert.deepEqual(graphToArray(listNode, []), [1, 2, 3, 4, 5])
    })
})