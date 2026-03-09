/**
 * Research publications data — organized by the three FSM Lab research pillars.
 *
 * Source: Professor Wang's Google Scholar
 * https://scholar.google.com/citations?user=bow_liAAAAAJ&hl=en&sortby=pubdate
 */

import type { TranslationKeys } from '@/lib/i18n/types';

/** Short category IDs — also used as URL query param values: /research?focus=ncs */
export type ResearchCategory = 'ncs' | 'cav' | 'cps';

export interface Publication {
  id: string;
  title: string;
  /** Array of author names — "Wang" will be highlighted indigo on the research page */
  authors: string[];
  /** Journal / conference name */
  venue: string;
  year: number;
  category: ResearchCategory;
  tags: string[];
  abstract: string;
  /** Cover image URL or local /public path */
  image?: string;
  /** DOI URL or conference page link */
  url?: string;
}

// ─── Connected & Autonomous Vehicles ─────────────────────────────────────────
const cav: Publication[] = [
  {
    id: 'cav-01',
    title:
      'ModeSeq: Taming Sparse Multimodal Motion Prediction with Sequential Mode Modeling',
    authors: [],
    venue: 'CVPR 2025',
    year: 2025,
    category: 'cav',
    tags: ['Motion Prediction', 'Multimodal', 'Autonomous Driving', 'CVPR'],
    abstract:
      'Anticipating the multimodality of future events lays the foundation for safe autonomous driving. However, multimodal motion prediction for traffic agents has been clouded by the lack of multimodal ground truth. Existing works predominantly adopt the winner-take-all training strategy to tackle this challenge, yet still suffer from limited trajectory diversity and uncalibrated mode confidence. We are thus motivated to introduce ModeSeq, a new multimodal prediction paradigm that models modes as sequences. Unlike the common practice of decoding multiple plausible trajectories in one shot, ModeSeq requires motion decoders to infer the next mode step by step, thereby more explicitly capturing the correlation between modes and significantly enhancing the ability to reason about multimodality. Leveraging the inductive bias of sequential mode prediction, we also propose the EarlyMatch-Take-All (EMTA) training strategy to diversify the trajectories further. Without relying on dense mode prediction or heuristic post-processing, ModeSeq considerably improves the diversity of multimodal output while attaining satisfactory trajectory accuracy. Moreover, ModeSeq naturally emerges with the capability of mode extrapolation, which supports forecasting more behavior modes when the future is highly uncertain.',
    image:
      '/research/Autonomous%20Driving%20%26%20Intelligent%20Transportation/img/1.png',
    url: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Zhou_ModeSeq_Taming_Sparse_Multimodal_Motion_Prediction_with_Sequential_Mode_Modeling_CVPR_2025_paper.pdf',
  },
  {
    id: 'cav-02',
    title:
      'Interventional Root Cause Analysis of Failures in Multi-Sensor Fusion Perception Systems',
    authors: [],
    venue: 'NDSS 2025',
    year: 2025,
    category: 'cav',
    tags: ['Autonomous Driving', 'Multi-Sensor Fusion', 'Root Cause Analysis', 'Causal Modeling'],
    abstract:
      'Autonomous driving systems (ADS) heavily depend on multi-sensor fusion (MSF) perception systems to process sensor data and improve the accuracy of environmental perception. However, MSF cannot completely eliminate uncertainties, and faults in multiple modules will lead to perception failures. To overcome these limitations, we propose a novel approach called interventional root cause analysis (IRCA). IRCA leverages the directed acyclic graph (DAG) structure of MSF to develop a hierarchical structural causal model (H-SCM), which effectively addresses the complexities of causal relationships. Our approach uses a divide-and-conquer pruning algorithm to encompass multiple causal modules within a causal path and to pinpoint intervention targets. We implement IRCA and evaluate its performance using real fault scenarios and synthetic scenarios with injected faults in the ADS Autoware. The average F1-score of IRCA in real fault scenarios is over 95%. The results show that IRCA can efficiently identify the causal paths leading to failures and significantly enhance the safety of ADS.',
    image:
      '/research/Autonomous%20Driving%20%26%20Intelligent%20Transportation/img/2.png',
    url: 'https://www.ndss-symposium.org/ndss-paper/interventional-root-cause-analysis-of-failures-in-multi-sensor-fusion-perception-systems/',
  },
  {
    id: 'cav-03',
    title:
      'Designing and Implementing AoI-Optimized Scheduling for Autonomous Driving Systems',
    authors: [],
    venue: 'IEEE Transactions on Mobile Computing',
    year: 2025,
    category: 'cav',
    tags: ['Age of Information', 'Scheduling', 'ROS 2', 'ADS'],
    abstract:
      'Autonomous Driving Systems (ADS) incorporate complex algorithm stacks, including sensing, localization, perception, prediction, planning, and control. To enhance the safety and comfort of ADS, it is crucial to utilize the most recent sensor data and meticulously schedule these algorithm stacks for better system communication. Our objective is to minimize the Age of Information (AoI), a metric that assesses the freshness of the processed information. The optimization of AoI on ADS poses significant challenges due to computing resource limitations and the complicated nature of ADS operations. Moreover, most ADS platforms, such as Autoware, are built on Robot Operating System 2 (ROS 2), whose special execution behavior introduces additional complexities in scheduling algorithm design. We propose an AoI-based scheduling optimization framework specifically for ADS, developing effective algorithms to streamline and enhance the scheduling processes, as well as customizing ROS 2 at the system level to optimize AoI further.',
    image:
      '/research/Autonomous%20Driving%20%26%20Intelligent%20Transportation/img/3.png',
    url: 'https://ieeexplore.ieee.org/abstract/document/11044491',
  },
  {
    id: 'cav-04',
    title:
      'BehaviorGPT: Smart Agent Simulation for Autonomous Driving with Next-Patch Prediction',
    authors: [],
    venue: 'NeurIPS 2024',
    year: 2024,
    category: 'cav',
    tags: ['Traffic Simulation', 'Transformer', 'Autonomous Driving', 'NeurIPS'],
    abstract:
      'Simulating realistic behaviors of traffic agents is pivotal for efficiently validating the safety of autonomous driving systems. Existing data-driven simulators primarily use an encoder-decoder architecture to encode the historical trajectories before decoding the future. We propose BehaviorGPT, a homogeneous and fully autoregressive Transformer designed to simulate the sequential behavior of multiple agents. Crucially, our approach discards the traditional separation between "history" and "future" by modeling each time step as the "current" one for motion generation, leading to a simpler, more parameter- and data-efficient agent simulator. We further introduce the Next-Patch Prediction Paradigm (NP3) to mitigate the negative effects of autoregressive modeling, in which models are trained to reason at the patch level of trajectories and capture long-range spatial-temporal interactions. Despite having merely 3M model parameters, BehaviorGPT won first place in the 2024 Waymo Open Sim Agents Challenge with a realism score of 0.7473 and a minADE score of 1.4147.',
    image:
      '/research/Autonomous%20Driving%20%26%20Intelligent%20Transportation/img/4.png',
    url: 'https://proceedings.neurips.cc/paper_files/paper/2024/hash/9144c7c014bf4c30e88f650bef8f68dd-Abstract-Conference.html',
  },
  {
    id: 'cav-05',
    title:
      'A First Physical-World Trajectory Prediction Attack via LiDAR-induced Deceptions in Autonomous Driving',
    authors: [],
    venue: 'USENIX Security 2024',
    year: 2024,
    category: 'cav',
    tags: ['LiDAR', 'Adversarial Attack', 'Trajectory Prediction', 'AV Security'],
    abstract:
      'Trajectory prediction forecasts nearby agents\' moves based on their historical trajectories. Accurate trajectory prediction is crucial for autonomous vehicles (AVs). Existing attacks compromise the prediction model of a victim AV by directly manipulating the historical trajectory of an attacker AV, which has limited real-world applicability. This paper, for the first time, explores an indirect attack approach that induces prediction errors via attacks against the perception module of a victim AV. We propose a novel two-stage attack framework to realize the single-point attack. The first stage of prediction-side attack efficiently identifies the state perturbations for the prediction model that are effective and velocity-insensitive. In the second stage of location matching, we match the feasible object locations with the found state perturbations. Our evaluation shows that our attack causes a collision rate of up to 63% and various hazardous responses of the victim AV, demonstrating the first security analysis spanning from LiDAR-based perception to prediction in autonomous driving.',
    image:
      '/research/Autonomous%20Driving%20%26%20Intelligent%20Transportation/img/5.png',
    url: 'https://www.usenix.org/conference/usenixsecurity24/presentation/lou',
  },
];

// ─── Networking & Distributed Systems ────────────────────────────────────────
const ncs: Publication[] = [
  {
    id: 'ncs-01',
    title:
      'Addressing Fluctuating Stragglers in Distributed Matrix Multiplication via Fountain Codes',
    authors: [],
    venue: 'IEEE Transactions on Parallel and Distributed Systems',
    year: 2025,
    category: 'ncs',
    tags: ['Distributed Computing', 'Fountain Codes', 'Straggler Mitigation', 'Matrix Multiplication'],
    abstract:
      'In distributed matrix multiplication, stragglers present a significant challenge. Coding techniques are often employed to mitigate this issue; however, their effectiveness is typically limited to handling a fixed number of stragglers. To address the issue of a fluctuating number of stragglers, we propose a novel approach that leverages a variant of Luby transform (LT) codes for distributed matrix multiplication, augmented with a feedback mechanism. This enables the system to tolerate a variable number of stragglers, potentially reducing the redundant computation to complete the task compared with existing coding methods dealing with a fixed number of stragglers. Furthermore, we comprehensively analyze the computational complexity associated with the proposed algorithm.',
    image: '/research/Networking%20%26%20Distributed%20Systems/img/1.png',
    url: 'https://ieeexplore.ieee.org/abstract/document/10806990/',
  },
  {
    id: 'ncs-02',
    title:
      'On Credibility of Adversarial Examples Against Learning-Based Grid Voltage Stability Assessment',
    authors: [],
    venue: 'IEEE Transactions on Smart Grid',
    year: 2022,
    category: 'ncs',
    tags: ['Power Grid', 'Adversarial Examples', 'Deep Learning', 'Cybersecurity'],
    abstract:
      'Voltage stability assessment is essential for maintaining reliable power grid operations. Stability assessment approaches using deep learning address the shortfalls of the traditional time-domain simulation-based approaches caused by increased system complexity. However, deep learning models are shown to be vulnerable to adversarial examples. In this paper, we conduct a systematic investigation on the attack requirements and credibility of six representative adversarial example attacks based on a voltage stability assessment application for the New England 10-machine 39-bus power system. We show that compromising about half the transmission system buses\' voltage traces is a rule-of-thumb attack requirement. We also propose a new approach that simultaneously estimates the predictive uncertainty of any given input of voltage trajectory and thwarts the attacks effectively.',
    image: '/research/Networking%20%26%20Distributed%20Systems/img/2.png',
    url: 'https://ieeexplore.ieee.org/abstract/document/9914610/',
  },
  {
    id: 'ncs-03',
    title:
      'Wave-for-Safe: Multisensor-based Mutual Authentication for Unmanned Delivery Vehicle Services',
    authors: [],
    venue: 'ACM MobiHoc 2023',
    year: 2023,
    category: 'ncs',
    tags: ['Unmanned Vehicle', 'Authentication', 'Multi-sensor', 'Security'],
    abstract:
      'In recent years, the deployment of unmanned vehicle delivery services has increased unprecedentedly, leading to a need for enhanced security due to the risk of leaving high-value packages to an unauthorized third party during pickup or delivery. Existing authentication methods such as QR code and one-time password are inadequate, as they are susceptible to attacks and provide only one-way authentication. This paper proposes Wave-for-Safe (W4S) — a novel mutual authentication system that utilizes multi-modal sensors on both the user\'s smartphone and the unmanned vehicle. W4S uses random hand-waving by the legitimate user to achieve robust authentication by obtaining highly correlated sensory data measured by the IMU in the smartphone and sensors in the unmanned vehicle (e.g., mmWave radar and camera). Evaluation in real-world scenarios shows that W4S achieves an equal error rate below 0.013 against various attacks.',
    image: '/research/Networking%20%26%20Distributed%20Systems/img/3.png',
    url: 'https://dl.acm.org/doi/abs/10.1145/3565287.3610253',
  },
  {
    id: 'ncs-04',
    title: 'Matrix Completion via Coded Distributed Alternating Least Squares',
    authors: [],
    venue: 'IEEE Transactions on Big Data',
    year: 2024,
    category: 'ncs',
    tags: ['Matrix Completion', 'Distributed Computing', 'Coded Computing', 'ALS'],
    abstract:
      'Low-rank matrix factorization (MF) decomposes a matrix into two low-dimensional matrices. One key algorithm for MF is distributed alternating least squares (ALS), iteratively learning the matrices. However, hardware, software, or network problems can cause distributed nodes (stragglers) to fail computation or communication. Existing algorithms neglect stragglers as a design concern. To address this, we propose D-ALS-MC (Distributed ALS Matrix Completion), a coding-assisted algorithm for distributed matrix completion. We analyze the trade-off between the maximum tolerable number of stragglers (recovery threshold) and coding redundancy (code rate), along with computational costs. Moreover, we prove that incomplete matrices satisfying the Restricted Isometry Property (R.I.P.) condition can recover original values. The experimental results demonstrate the effectiveness of our proposed methods.',
    image: '/research/Networking%20%26%20Distributed%20Systems/img/4.png',
    url: 'https://ieeexplore.ieee.org/document/10404479/',
  },
  {
    id: 'ncs-05',
    title:
      'Minimizing Latency for Multi-DNN Inference on Resource-Limited CPU-Only Edge Devices',
    authors: [],
    venue: 'IEEE Internet of Things Journal',
    year: 2024,
    category: 'ncs',
    tags: ['Edge Computing', 'CPU', 'DNN Inference', 'Latency Optimization'],
    abstract:
      'Despite considerable advancements in specialized hardware, the majority of IoT edge devices still rely on CPUs. The burgeoning number of IoT users amplifies the challenges associated with performing multiple Deep Neural Network inferences on these resource-limited, CPU-only edge devices. Existing strategies, including model compression, hardware acceleration, and model partitioning, often involve a trade-off in inference accuracy, are unsuitable due to hardware specificity, or lead to inefficient resource utilization. In response to these challenges, this paper introduces L-PIC (Latency Minimized Parallel Inference on CPU) — a framework expressly devised to optimize resource allocation, decrease inference latency, and maintain result accuracy on CPU-only edge devices. Compared to the state-of-the-art method, L-PIC can reduce the inference latency of multi-DNN by an average of approximately 30% across all tested scenarios.',
    image: '/research/Networking%20%26%20Distributed%20Systems/img/5.png',
    url: 'https://ieeexplore.ieee.org/document/10621120/',
  },
];

// ─── Edge Computing & Digital Twin ───────────────────────────────────────────
const cps: Publication[] = [
  {
    id: 'cps-01',
    title: 'Inference Service Fidelity Maximization in DT-Assisted Edge Computing',
    authors: [],
    venue: 'IEEE Transactions on Services Computing',
    year: 2025,
    category: 'cps',
    tags: ['Digital Twin', 'Edge Computing', 'Fidelity', 'MEC'],
    abstract:
      'Digital twin (DT) technology enables smooth integrations of cyber and physical worlds in alignment with the Industry 4.0 initiative. In this paper, we study fidelity-aware inference services in a DT-assisted MEC environment, where machine learning-based inference models must be continuously retrained using updated DT data in order to provide high-fidelity services for consumers. We formulate two novel optimization problems: the initial DT and model placement problem with the aim of minimizing the total cost of various resources consumed for the placements, and the cumulative fidelity maximization problem to maximize the long-term cumulative fidelity of all service models while minimizing resource costs. We develop an efficient algorithm through a reduction to a series of minimum-cost maximum matching problems, and devise an online algorithm with a provable competitive ratio for the cumulative fidelity maximization problem. Simulation results demonstrate that the proposed algorithms outperform their baselines by no less than 28%.',
    image: '/research/Edge%20Computing%20%26%20Digital%20Twin/img/1.png',
    url: 'https://ieeexplore.ieee.org/abstract/document/11129880/',
  },
  {
    id: 'cps-02',
    title: 'Digital Twin Freshness Maximization in Edge Computing',
    authors: [],
    venue: 'IEEE/ACM Transactions on Networking',
    year: 2025,
    category: 'cps',
    tags: ['Digital Twin', 'Age of Information', 'MEC', 'IoT'],
    abstract:
      'Mobile Edge Computing (MEC) shifts powerful computing resource provisioning from remote powerful data centers to the edge of core networks. Meanwhile, Digital Twin (DT) has surfaced as a promising technology to provide comprehensive and dynamic descriptions of physical objects in cyberspace with bidirectional and real-time interactions. There is an increasing necessity to address the freshness of both DT states and DT data, through timely synchronizations between DTs and their objects in a highly dynamic IoT environment. In this paper, we develop innovative methodologies to improve the DT freshness while minimizing the cost of various resources consumed on the DT freshness improvement. We formulate the static and dynamic DT freshness optimization problems and devise an approximation algorithm and an online algorithm with a provable competitive ratio respectively. Simulation results show that the proposed algorithms outperform their comparison baselines by no less than 13.2%.',
    image: '/research/Edge%20Computing%20%26%20Digital%20Twin/img/2.png',
    url: 'https://ieeexplore.ieee.org/abstract/document/11342360/',
  },
  {
    id: 'cps-03',
    title:
      'AoI-Aware Service Provisioning in Edge Computing for Digital Twin Network Slicing Requests',
    authors: [],
    venue: 'IEEE/ACM Transactions on Networking',
    year: 2024,
    category: 'cps',
    tags: ['Digital Twin Network', 'Network Slicing', 'Age of Information', 'MEC'],
    abstract:
      'The Digital Twin Network (DTN) paradigm is projected to deliver upon the promise of efficient collaboration among digital twins to enable complicated and systematic services across many domains. In this paper, we investigate DTN slicing-enabled service provisioning in MEC, where each DTN slice consists of one master digital twin and a set of worker digital twins. The master digital twin aggregates the processed data from worker digital twins to model the DTN continuously for user query services, whilst meeting delay requirements of users. We capture the utility gain of a DTN slicing request based on the DTN model quality at its master digital twin that is impacted by the Age of Information (AoI), and focus on two novel optimization problems: the utility maximization problem for a single DTN slicing request, and the dynamic utility maximization problem for multiple DTN slicing requests. Experimental results demonstrate that the proposed algorithms outperform their counterparts by at least 10.2%.',
    image: '/research/Edge%20Computing%20%26%20Digital%20Twin/img/3.png',
    url: 'https://ieeexplore.ieee.org/document/10646556/',
  },
  {
    id: 'cps-04',
    title:
      'Digital Twin-Enabled Service Provisioning in Edge Computing via Continual Learning',
    authors: [],
    venue: 'IEEE Transactions on Mobile Computing',
    year: 2023,
    category: 'cps',
    tags: ['Digital Twin', 'Continual Learning', 'Edge Computing', 'IoT'],
    abstract:
      'Propelled by recent advances in Mobile Edge Computing (MEC) and the Internet of Things (IoT), the digital twin technique has been envisioned as a de-facto driving force to bridge the virtual and physical worlds through creating digital portrayals of physical objects. Data-driven modelling facilitates the implementation and maintenance of digital twins, where simulations are usually performed based on Deep Neural Networks (DNNs). However, it is challenging to maintain real-time synchronization between a digital twin and its physical object due to the dynamics of physical objects and sensing data drift over time. To address this critical issue, continual learning is a promising solution to retrain models of digital twins incrementally. We investigate digital twin synchronization via continual learning in MEC, with the aim to maximize the total utility gain (the enhanced model accuracy). Simulation results show that the proposed algorithms outperform counterpart benchmarks by no less than 13.2%.',
    image: '/research/Edge%20Computing%20%26%20Digital%20Twin/img/4.png',
    url: 'http://ieeexplore.ieee.org/document/10316647/',
  },
  {
    id: 'cps-05',
    title:
      'AoI-Aware User Service Satisfaction Enhancement in Digital Twin-Empowered Edge Computing',
    authors: [],
    venue: 'IEEE Internet of Things Journal',
    year: 2023,
    category: 'cps',
    tags: ['Digital Twin', 'Age of Information', 'MEC', 'User Satisfaction'],
    abstract:
      'The emerging digital twin technique enhances the network management efficiency and provides comprehensive insights on network performance, through mapping physical objects to their digital twins. The user satisfaction on digital twin-enabled service relies on the freshness of digital twin data, which is measured by the Age of Information (AoI). Mobile Edge Computing (MEC), as an ideal paradigm for delay-sensitive services, is able to realize real-time data communication between physical objects and their digital twins at the network edge. However, the mobility of physical objects and dynamics of user query arrivals make seamless service provisioning in MEC become challenging. We investigate dynamic digital twin placements for improving user service satisfaction in MEC environments, and formulate the static and dynamic utility maximization problems. Simulation results demonstrate that the proposed algorithms outperform the comparison baseline algorithms by at least 10.7%.',
    image: '/research/Edge%20Computing%20%26%20Digital%20Twin/img/5.png',
    url: 'https://ieeexplore.ieee.org/document/10289645/',
  },
];

/** Full combined list, sorted by year descending */
export const publications: Publication[] = [...cav, ...ncs, ...cps].sort(
  (a, b) => b.year - a.year,
);

/** Visual + i18n config per category — shared by home pillars and research page */
export const CATEGORY_CONFIG: Record<
  ResearchCategory,
  {
    icon: 'network' | 'car' | 'cpu';
    /** Maps to home page translation keys so titles stay in sync */
    titleKey: TranslationKeys;
    descKey: TranslationKeys;
    color: string;
    bgColor: string;
    borderColor: string;
    glowColor: string;
  }
> = {
  ncs: {
    icon: 'network',
    titleKey: 'home.research.item1.title',
    descKey: 'home.research.item1.desc',
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
    glowColor: 'group-hover:bg-sky-500/20',
  },
  cav: {
    icon: 'car',
    titleKey: 'home.research.item2.title',
    descKey: 'home.research.item2.desc',
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    glowColor: 'group-hover:bg-violet-500/20',
  },
  cps: {
    icon: 'cpu',
    titleKey: 'home.research.item3.title',
    descKey: 'home.research.item3.desc',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    glowColor: 'group-hover:bg-indigo-500/20',
  },
};
