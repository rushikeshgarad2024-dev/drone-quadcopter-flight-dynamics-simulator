# 6-DOF Drone & Quadcopter Flight Dynamics Simulator 🛸✈️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Domain](https://img.shields.io/badge/Domain-Aerospace%20%26%20Flight%20Control-cyan.svg)](#)
[![Tech](https://img.shields.io/badge/Tech-6--DOF%20%7C%20PID%20Control%20%7C%20Aerospace-brightgreen.svg)](#)

A 6-DOF physics and attitude stabilization simulation platform for autonomous UAVs and multirotor drones implementing **Newton-Euler Rigid Body Dynamics** and **PID Closed-Loop Flight Controllers**.

---

## 🌟 Key Features
- 🛸 **6-DOF Rigid Body Dynamics:** Simulates translational and rotational acceleration:
  $$m \ddot{\mathbf{r}} = \mathbf{R} \mathbf{F}_b - m g \mathbf{z}_w, \quad \mathbf{I} \dot{\boldsymbol{\omega}} = \boldsymbol{\tau} - \boldsymbol{\omega} \times (\mathbf{I}\boldsymbol{\omega})$$
- 🎮 **PID Attitude & Hover Stabilization:** Closed-loop roll, pitch, yaw, and altitude control.

---

## 🚀 Quick Start
```bash
git clone https://github.com/rushikeshgarad2024-dev/drone-quadcopter-flight-dynamics-simulator.git
cd drone-quadcopter-flight-dynamics-simulator
npx serve .
# Or run Python dynamics model:
python drone_dynamics.py
```

---

## 👨‍💻 Author
**Rushikesh Garad** - [GitHub](https://github.com/rushikeshgarad2024-dev) • [Email](mailto:rushikeshgarad2024@gmail.com)
