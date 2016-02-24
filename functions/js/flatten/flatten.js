var flatten = function (arr) {
	var res = [],
		aux = true;

	for (var i = arr.length - 1; i >= 0; i--) {
		if(Array.isArray(arr[i])){
			aux = false;
			res = res.concat(arr[i]);
		}else{
			res.push(arr[i]);
		}
	};
	// [1]
	// [[1, [2]]]
	if(arr.length == 1 && !Array.isArray(arr)){
		return arr[0];
	}
	// [1, 2]
	if(aux){
		return res.sort()
	}
	//else
	return flatten(res.sort())
};

exports.flatten = flatten