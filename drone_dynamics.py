"""
6-DOF Quadcopter Flight Dynamics & PID Control Simulator
Author: Rushikesh Garad
"""
import numpy as np

class QuadcopterDynamics:
    def __init__(self, mass=1.2, arm_length=0.25, Ixx=0.015, Iyy=0.015, Izz=0.025):
        self.mass = mass
        self.L = arm_length
        self.I = np.diag([Ixx, Iyy, Izz])
        self.g = 9.81
        self.pos = np.zeros(3)
        self.vel = np.zeros(3)
        self.angles = np.zeros(3) # Roll, Pitch, Yaw

    def step(self, rotor_thrusts_N, dt=0.01):
        total_thrust = np.sum(rotor_thrusts_N)
        acc_z = (total_thrust / self.mass) - self.g
        self.vel[2] += acc_z * dt
        self.pos[2] += self.vel[2] * dt
        return self.pos

if __name__ == "__main__":
    drone = QuadcopterDynamics()
    hover_thrust = (drone.mass * drone.g) / 4.0
    print(f"Quadcopter Initialized. Hover Thrust per Motor: {hover_thrust:.2f} N")
