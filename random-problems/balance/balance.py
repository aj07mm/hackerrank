def balance(brackets):
	def get_right_mirror(bracket):
		bracket_dic = {
			'[' : ']',
			'{' : '}',
			'(' : ')',
		}
		return bracket_dic.get(bracket)
	is_balanced = True
	if(len(brackets)%2 != 0):
		is_balanced = False
	for x in xrange(0,len(brackets)/2):
		if(get_right_mirror(brackets[x]) != brackets[len(brackets)-x-1]):
			is_balanced = False
	return is_balanced