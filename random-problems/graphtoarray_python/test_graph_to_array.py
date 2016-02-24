import unittest
from graph_to_array import graph_to_array

class TestGraphToArray(unittest.TestCase):
	def test_1_pawn(self):
		list_node = {
			"val": 1,
			"next": {
				"val": 2,
				"next": {
					"val": 3,
					"next": {
						"val": 4,
						"next": None
					}
				}
			}
		}
		self.assertEquals(graph_to_array(list_node, []), [ 1, 2, 3, 4])

unittest.main()