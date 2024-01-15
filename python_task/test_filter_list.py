# test_filter_list.py

import unittest
from python_task.filter_list import filter_list

class TestFilterList(unittest.TestCase):
    def test_filter_list_valid(self):
        input_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        result = filter_list(input_list)
        expected_result = [1, 5, 7, 11, 13, 17, 19]
        self.assertEqual(result, expected_result)

    def test_filter_list_invalid_length(self):
        input_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
        with self.assertRaises(ValueError):
            filter_list(input_list)

if __name__ == "__main__":
    unittest.main()
