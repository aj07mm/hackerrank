var assert = require ('assert'),
    combinations = require('./journey').combinations;

describe('combinations', function() {
    it.only('2', function () {
    	var numberOfAstronauts = 2
        var astronautsRelation = {
        	"0": 0
        };
        assert.equal(combinations(numberOfAstronauts, astronautsRelation), 1);
    })
    it('4', function () {
    	var numberOfAstronauts = 6
        var astronautsRelation = {
        	"0": 1,
        	"1": 2,
            "0": 2,
            "3": 4
        };
        assert.equal(combinations(numberOfAstronauts, astronautsRelation), 6)
    })
});