var assert = require('assert'),
    removeRepeated = require('./remove_repeated').removeRepeated;

describe("removeRepeated", function () {
    it("test1", function () {
        var arr = [1,2,3,3,1,5,6,1]
        assert.deepEqual(removeRepeated(arr), [1,2,3,5,6])
    })
})