def get_squares(arr_first, arr_second):
	arr_res = []
	for n in arr_second:
		if n*n in arr_first:
			arr_res.append(n)
	return arr_res
