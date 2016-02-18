var assert = require ('assert'),
    foo = require('./foo').foo;

describe('foo', function() {
    it('1 empires', function () {
        var bar = []
        assert.equal(foo(bar), 0)
    })
})