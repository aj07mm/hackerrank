'use strict'

var largestPermutation = function (N, K) {
	if(N.length == 1){
		return N
	}
	var notPermutated = N.slice(0);
	notPermutated.sort().reverse();

	for (var i = 0; i <= N.length - 1; i++) {
		for (var j = i; j <= N.length - 1; j++) {
			//is more then N[i] and N[j] is the max number not permutated yet
			if(N[i] < N[j] && Math.max.apply(null, notPermutated) == N[j]){
				swap(N, i, j);
				notPermutated.remove(notPermutated.indexOf(N[j]));
				K--; //one try
				if(K == 0){
					return N;
				}
			}
		}
	};
	return N;
};

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

function swap(arr, indexA, indexB){
	var c = arr[indexA];
	arr[indexA] = arr[indexB];
	arr[indexB] = c
}

exports.largestPermutation = largestPermutation