# detail of proj 

this is about the details of proj ：

A Multi-Level Remote Driving Framework for Autonomous Vehicles

ZHOU, Qian (Principal Investigator / Project Coordinator)WANG, Jianping (Co-Investigator)
Department of Computer Science
Project: Research

## Description


Autonomous driving is revolutionizing the future of transportation and has garnered significant attention from sectors beyond academia, including industry and government. Despite substantial progress, there remains a long way to go before autonomous vehicles can operate independently on open roads. According to the 2024 edition of the Code of Practice issued by the Transport Department of Hong Kong, each autonomous vehicle must be equipped with a remote driving system that allows a remote backup operator to take control via a wireless network when the vehicle encounters complex or unforeseen scenarios. Existing solutions for remote driving of autonomous vehicles are sparse and basic, facing several challenges and flaws. First, the vehicle streams videos of its surroundings to the operator, but these videos are often low-definition or stutter due to limited network bandwidth. Second, there is network latency between when the vehicle captures and sends videos to the operator and when it receives the control commands from the operator. Third, remote driving is more demanding than traditional in-vehicle driving, which can quickly lead to operator fatigue. Each of these issues can directly contribute to traffic accidents during remote driving.In this project, we propose the first remote driving framework that employs a threelevel strategy, with each level addressing one of the aforementioned flaws to significantly enhance remote driving safety. Level 1 optimizes bandwidth allocation for video streaming, improving video quality. We will develop dynamic mechanisms that allocate higher bandwidth during challenging driving scenarios or when capturing important content. Additionally, we will design adaptive bitrate streaming to determine the optimal bitrate for each video. Level 2 compensates for network delay, enhancing operational accuracy. We will predict the future positions of nearby obstacles, enabling the operator to issue commands in advance. Besides, a buffering mechanism will be implemented to ensure commands are executed on time and at a constant rate, despite network fluctuations. Level 3 mitigates the operator’s workload. We will provide the operator with recommended trajectories and actions, allowing them to follow suggestions rather than always making decisions. Furthermore, we will develop methods to generate explanations for the rationale behind each recommendation, ensuring effective oversight of the vehicle.Our solutions will be tested not only in the lab but also in a real autonomous vehicle operating at the Foxconn Campus (Longhua, Shenzhen), addressing potential gaps between laboratory and real-world settings, thereby enhancing the impact of our research. 

## more details

https://scholars.cityu.edu.hk/en/projects/a-multi-level-remote-driving-framework-for-autonomous-vehicles/

