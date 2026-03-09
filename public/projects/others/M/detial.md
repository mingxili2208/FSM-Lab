# detail of proj 

this is about the details of proj ：

Modelling and Handling Uncertainties in Autonomous Driving Systems

WANG, Jianping (Principal Investigator / Project Coordinator)
Department of Computer Science
Project: Research

## Description

The cornerstone of an autonomous vehicle is driving safety, which is jointly determined by perception, prediction, motion planning, and control in an autonomous driving system. The performance of the above modules is highly subject to various uncertainties caused by adverse weather or imperfect deep machine learning algorithms. Moreover, the impact of uncertainties may propagate from an upstream task to its downstream tasks. In the literature, uncertainties are modelled separately in different tasks, which cannot capture uncertainties coherently, leading to either over-optimistic or over-conservative driving decisions. This project tackles the above critical problem by developing a unified framework to handle uncertainties in an end-to-end manner. In particular, uncertainties from perception and prediction will be quantified and represented in a unified format as a probabilistic occupancy map. To smoothly integrate existing motion planning algorithms into our framework, we will extend existing motion planning algorithms into their robust versions. In particular, for mathematical-based motion planning, we will derive probabilistic constraints from the probabilistic occupancy map so that traditional optimization approaches can handle uncertainties by planning the optimal trajectory satisfying the probabilistic constraints. For learning-based motion planning, we will derive potential collision probability from the probabilistic occupancy map and add it into the loss function of learning-based motion planning. In addition, to achieve a good balance between robustness and other performance metrics, we enable the motion planning task to output a safe driving corridor so that the control task can find the optimal commands to constitute the running trajectory bounded by the given safe driving corridor. To evaluate the robustness of an autonomous driving system as a whole as well as the robustness of individual tasks, we plan to develop a benchmark suite consisting of typical traffic scenarios in different weather conditions, feasible alternative trajectories, and safety metrics. In summary, the project will provide (1) a unified representation for different types of uncertainties which can be used across the pipeline of an autonomous driving system, (2) a new interface between upstream tasks and downstream tasks to inherit uncertainty consideration, (3) a generic approach to incorporate uncertainty awareness into existing motion planning and control algorithms, and (4) a benchmark suite tailored for robustness evaluation. This project will improve the robustness of autonomous driving systems and relieve the safety concern of the public towards autonomous vehicles. 

## Research output

5
RGC 32 - Refereed conference paper (with host publication) 
1
RGC 21 - Publication in refereed journal

### some of out put

1. CoDynTrust: Robust Asynchronous Collaborative Perception via Dynamic Feature Trust Modulus
Xu, Y., Li, L., Wang, J., Yang, B., Wu, Z., Chen, X. & Wang, J., 2025, 2025 IEEE International Conference on Robotics and Automation (ICRA). IEEE, p. 336-342 7 p. (Proceedings - IEEE International Conference on Robotics and Automation).
Research output: Chapters, Conference Papers, Creative and Literary Works › RGC 32 - Refereed conference paper (with host publication) › peer-review


2. Dynamic Defense for Car-Borne LiDAR Vehicle Detection
Xu, Y., Guo, D., Song, Q., Lou, Y., Zhu, Y., Wang, J., Qiao, C. & Tan, R., 2025, MobiSys '25 - Proceedings of the 23rd ACM international Conference on Mobile Systems, Applications, and Services. New York, NY: Association for Computing Machinery, p. 431-444 14 p. (MobiSys - Proceedings of the ACM international Conference on Mobile Systems, Applications, and Services).
Research output: Chapters, Conference Papers, Creative and Literary Works › RGC 32 - Refereed conference paper (with host publication) › peer-review

3. VI-Planning: Infrastructure-Assisted Real-Time Planning Optimization for Autonomous Driving
Lu, Y., Wang, J., Dong, X., Huang, Z., Liu, B., Wu, J.-M. & Wang, J., Nov 2025, ACM MobiCom '25 - Proceedings of the 2025 The 31st Annual International Conference on Mobile Computing and Networking. Association for Computing Machinery, p. 923-937 (ACM MobiCom - Proceedings of the the Annual International Conference on Mobile Computing and Networking).
Research output: Chapters, Conference Papers, Creative and Literary Works › RGC 32 - Refereed conference paper (with host publication) › peer-review

## more details

https://scholars.cityu.edu.hk/en/projects/modelling-and-handling-uncertainties-in-autonomous-driving-system/