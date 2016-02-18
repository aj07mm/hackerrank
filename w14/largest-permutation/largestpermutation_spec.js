//https://www.hackerrank.com/contests/w14/challenges/largest-permutation

// Print the lexicographically largest permutation 
// you can make with at most KK swaps.

var assert = require ('assert'),
    largestPermutation = require('./largestpermutation').largestPermutation;

describe('largestPermutation', function() {
    it('N=[1] K=1', function () {
    	var N = [1],
    		K = 1
        assert.deepEqual(largestPermutation(N, K), [1])
    });

    it('N=[1,2] K=1', function () {
    	var N = [1,2],
    		K = 1
        assert.deepEqual(largestPermutation(N, K), [2,1])
    });

    it('N=[1,2] K=2', function () {
    	var N = [1,2,3,4,5],
    		K = 1
        assert.deepEqual(largestPermutation(N, K), [5,2,3,4,1])
    });

    it('N=[2, 1, 3] K=2', function () {
    	var N = [2, 1, 3],
    		K = 1
        assert.deepEqual(largestPermutation(N, K), [3, 1, 2])
    });

    it('N=[1, 1, 4, 4] K=2', function () {
    	var N = [1, 1, 4, 4],
    		K = 2
        assert.deepEqual(largestPermutation(N, K), [4, 4, 1, 1])
    });

    it('N=[1,2] K=1', function () {
    	var N = [2, 1],
    		K = 1
        assert.deepEqual(largestPermutation(N, K), [2,1])
    });
})