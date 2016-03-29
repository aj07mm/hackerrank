import unittest
from get_squares import get_squares

class Testget_squares(unittest.TestCase):
	def test_1(self):
		arr_first = [2, 3, 4]
		arr_second = [2, 3, 4]
		self.assertEquals(get_squares(arr_first, arr_second), [2])
	def test_2(self):
		arr_first = [2, 9, 4]
		arr_second = [2, 3, 4]
		self.assertEquals(get_squares(arr_first, arr_second), [2, 3])
	def test_3(self):
		arr_first = [2, 9, 81]
		arr_second = [2, 3, 9]
		self.assertEquals(get_squares(arr_first, arr_second), [3, 9])


unittest.main()