def graph_to_array(list_node, memo): # right
	if(list_node["next"] == None):
		return [list_node["val"]]
	return [list_node["val"]] + graph_to_array(list_node["next"], memo)

# def graph_to_array(list_node, memo): # wrong
#     if(list_node["next"] == None):
#     	return [list_node["val"]]
#     return memo + graph_to_array(list_node["next"], memo)