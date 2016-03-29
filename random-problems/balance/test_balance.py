import unittest
from balance import balance

class TestBalance(unittest.TestCase):
	def test_1(self):
		brackets = '[]'
		self.assertEquals(balance(brackets), True)
	def test_2(self):
		brackets = '{[]}'
		self.assertEquals(balance(brackets), True)
	def test_3(self):
		brackets = '{[1]}'
		self.assertEquals(balance(brackets), False)
	def test_4(self):
		brackets = '{[}]'
		self.assertEquals(balance(brackets), False)

unittest.main()