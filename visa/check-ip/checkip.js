exports.checkip = function (ips) {
	var arrResults = []
    for (var i = ips.length - 1; i >= 0; i--) {
    	var ip = ips[i];
    	console.log(checkIPv4(ip))
    	if(checkIPv4(ip)){
    		arrResults.push('IPv4');
    	}else if(checkIPv6(ip)){
    		arrResults.push('IPv6');
    	}else{
    		arrResults.push('Neither');
    	}
    };
    return arrResults;
};

var checkIPv4 = function(ip){
	var ipSplitted = ip.split('.');
	if(ipSplitted.length == 4){
		for (var i = ipSplitted.length - 1; i >= 0; i--) {
			if(!checkNumber(ipSplitted[i], 10)){
				return false;
			}
		};
	}
	return true;
}

var checkIPv6 = function(ip){
	var ipSplitted = ip.split(':');
	if(ipSplitted.length == 8){
		for (var i = ipSplitted.length - 1; i >= 0; i--) {
			if(!checkNumber(ipSplitted[i], 16)){
				return false;
			}
		};
	}
	return true;
}

var getRange = function(base) {
	var range = []
	for (var i = 0; i < base; i++) {
		var temp = i;
		range.push(temp.toString(base));
	};
	return range;
}

var checkNumber = function(X, base){
	var range = getRange(base);
	return X.split('').reduce(function(memo, num){
		if(range.indexOf(num) == -1 && memo){
			return false
		}
		return true
	}, true);
}