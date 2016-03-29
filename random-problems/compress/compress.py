def compress(word):
	dic_letter = {}
	for letter in word:
		if(dic_letter.get(letter) == None):
			dic_letter[letter] = 0
		else:
			dic_letter[letter] = dic_letter[letter] + 1
	return dic_letter

print compress("asdasdssss")