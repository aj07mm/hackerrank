var graphToArray = function (listNode, memo) {
	//run once
	if(listNode.next == null){
		memo.push(listNode.val)
		return memo;
	}
	//go down
	//but memo here call stacks above the current one
	return [listNode.val].concat(graphToArray(listNode.next, memo)).sort()
};

exports.graphToArray = graphToArray