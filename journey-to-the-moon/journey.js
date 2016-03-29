var combinations = function (numberOfAstronauts, astronautsRelation) {
	var relationKeys   = Object.keys(astronautsRelation),
		relationValues = Object.values(astronautsRelation),
		ignoredElms = [],
		possibleN;

	for (var i = relationValues.length - 1; i >= 0; i--) {
		if(relationKeys.indexOf(relationValues[i]) == -1){
			if(ignoredElms.indexOf(relationValues[i]) == -1){
				ignoredElms.push(relationValues[i]);
			}
		}
	};
	
	// 2 astronauts && 1 type
	if(ignoredElms.length == numberOfAstronauts -1 ){
		possibleN = numberOfAstronauts;
	}else{
		possibleN = numberOfAstronauts - ignoredElms.length;
	}
	return (possibleN * (possibleN - 1))/2;
};

exports.combinations = combinations;


Object.prototype.values = function(obj){
	var res = []
	for(key in obj) {
		if(Object.prototype.hasOwnProperty.call(obj, key)){
			res.push(obj[key]);
		}
	}
	return res;
}