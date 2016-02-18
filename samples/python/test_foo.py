import unittest
from foo import foo

class TestFoo(unittest.TestCase):
	def test_1_pawn(self):
		bar = []
		self.assertEquals(foo(bar), 0)

unittest.main()