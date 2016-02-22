var assert = require ('assert'),
    checkip = require('./checkip').checkip;

describe('checkip', function() {
	//ips a.b.c.d each 0-255
    it('ipv4', function () {
        var ips = ['0000.0000.0000.0000']
        assert.deepEqual(checkip(ips), [ 'IPv4' ])
    })
    it('ipv4 2', function () {
        var ips = ['222.231.113.64']
        assert.deepEqual(checkip(ips), [ 'IPv4' ])
    })
    it('not ipv4', function () {
        var ips = ['000A.0000.0000.0000']
        assert.deepEqual(checkip(ips), [ 'Neither' ])
    })
    it('ipv6', function () {
        var ips = ['2607:f0d0:1002:0051:0000:0000:0000:0004']
        assert.deepEqual(checkip(ips), [ 'IPv6' ])
    })
    it('not ipv6', function () {
        var ips = ['000A.0000.0000.0000']
        assert.deepEqual(checkip(ips), [ 'Neither' ])
    })
    it('not ipv6', function () {
        var ips = ['000A.0000.0000.0000', '000A.0000.0000.0000']
        assert.deepEqual(checkip(ips), [ 'Neither', 'Neither' ])
    })
})