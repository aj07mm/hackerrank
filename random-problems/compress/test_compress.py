import unittest
from compress import compress

class TestCompress(unittest.TestCase):
	def test_1(self):
		brackets = '[]'
		self.assertEquals(compress(brackets), True)
	def test_2(self):
		brackets = '{[]}'
		self.assertEquals(compress(brackets), True)
	def test_3(self):
		brackets = '{[1]}'
		self.assertEquals(compress(brackets), False)
	def test_4(self):
		brackets = '{[}]'
		self.assertEquals(compress(brackets), False)

unittest.main()