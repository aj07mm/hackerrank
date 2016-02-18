// http://stackoverflow.com/questions/500606/javascript-array-delete-elements#500617

// Array Remove - By John Resig (MIT Licensed)

	// Array.prototype.remove = function(from, to) {
	//   var rest = this.slice((to || from) + 1 || this.length);
	//   this.length = from < 0 ? this.length + from : from;
	//   return this.push.apply(this, rest);
	// };

	// // Remove the second item from the array
	// array.remove(1);
	// // Remove the second-to-last item from the array
	// array.remove(-2);
	// // Remove the second and third items from the array
	// array.remove(1,2);
	// // Remove the last and second-to-last items from the array
	// array.remove(-2,-1);


// FOR

	// Array.prototype.remove = function(index){
	// 	var result = [];
	// 	for (var i = 0; i <= this.length - 1; i++) {
	// 		if(i != index){
	// 			result.push(this[i])
	// 		}
	// 	};
	// 	return result;
	// }

// MY SLICE!

	// Array.prototype.remove = function(index){
	// 	var arr = this,
	// 		part1, part2, indexBefore, indexAfter;

	// 		indexBefore = index - 1;
	// 		indexAfter = index + 1;

	// 		part1 = this.slice(0, indexBefore+1); //because is not closed
	// 		part2 = this.slice(indexAfter);

	// 	return part1.concat(part2);
	// }