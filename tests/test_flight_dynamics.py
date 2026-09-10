import unittest
import numpy as np

class TestFlightDynamics(unittest.TestCase):
    def test_quaternion_unit_norm(self):
        q = np.array([0.7071, 0.0, 0.7071, 0.0])
        norm = np.linalg.norm(q)
        self.assertAlmostEqual(norm, 1.0, places=3)

if __name__ == '__main__':
    unittest.main()
