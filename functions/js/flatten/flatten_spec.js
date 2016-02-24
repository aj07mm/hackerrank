var assert = require ('assert'),
    flatten = require('./flatten').flatten;

describe('flatten', function() {
    it('var arr = [[1]]', function () {
        var arr = [[1]]
        assert.deepEqual(flatten(arr), [1])
    })
    it('var arr = [[1], [2]]', function () {
        var arr = [[1], [2]]
        assert.deepEqual(flatten(arr), [1, 2].sort())
    })
    it('var arr = [[1, 3], [2]]', function () {
        var arr = [[1, 3], [2]]
        assert.deepEqual(flatten(arr), [1, 3, 2].sort())
    })
    it('var arr = [[1, [2]]]', function () {
        var arr = [[1, [2]]]
        assert.deepEqual(flatten(arr), [1, 2].sort())
    })
    it('var arr = [[1, [[2]]]]', function () {
        var arr = [[1, [[2]]]]
        assert.deepEqual(flatten(arr), [1, 2].sort())
    })
    it('var arr =  [[1, [2, [3, [4, [5, [6, [7, [8, [9, [0]]]]]]]]]]]', function () {
        var arr =  [[1, [2, [3, [4, [5, [6, [7, [8, [9, [0]]]]]]]]]]]
        assert.deepEqual(flatten(arr), [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].sort())
    })
})