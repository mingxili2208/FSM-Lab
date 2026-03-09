# this is the list of Networking & Distributed Systems

in this file i will show the link between articles、abstract、network link and img；all this will be linked by the num；and the img can be find in dir img

## articles name
|num|name|
|--|--|
1|Addressing Fluctuating Stragglers in Distributed Matrix Multiplication via Fountain Codes
2|On Credibility of Adversarial Examples Against Learning-Based Grid Voltage Stability Assessment
3|Wave-for-Safe: Multisensor-based Mutual Authentication for Unmanned Delivery Vehicle Services
4|Matrix Completion via Coded Distributed Alternating Least Squares
5|Minimizing Latency for Multi-DNN Inference on Resource-Limited CPU-Only Edge Devices

## abstract
|num|name|
|--|--|
1|In distributed matrix multiplication, stragglers present a significant challenge. Coding techniques are often employed to mitigate this issue; however, their effectiveness is typically limited to handling a fixed number of stragglers. To address the issue of a fluctuating number of stragglers, we propose a novel approach that leverages a variant of Luby transform (LT) codes for distributed matrix multiplication, augmented with a feedback mechanism. This enables the system to tolerate a variable number of stragglers, potentially reducing the redundant computation to complete the task compared with existing coding methods dealing with a fixed number of strangers. Furthermore, we comprehensively analyze the computational complexity associated with the proposed algorithm.
2|Voltage stability assessment is essential for maintaining reliable power grid operations. Stability assessment approaches using deep learning address the shortfalls of the traditional time-domain simulation-based approaches caused by increased system complexity. However, deep learning models are shown to be vulnerable to adversarial examples in the field of computer vision. While this vulnerability has been noticed by the power grid cybersecurity research, the domain-specific analysis on the requirements imposed upon effective attack implementation is still lacking. Although these attack requirements are usually reasonable in computer vision tasks, they can be stringent in the context of power grids. In this paper, we conduct a systematic investigation on the attack requirements and credibility of six representative adversarial example attacks based on a voltage stability assessment application for the New England 10-machine 39-bus power system. We show that (1) compromising about half the transmission system buses’ voltage traces is a rule-of-thumb attack requirement; (2) the universal adversarial perturbations regardless of the original clean voltage trajectory possess the same credibility as the widely studied false data injection attacks on power grid state estimation, while the input-specific adversarial perturbations are less credible; (3) the prevailing strong adversarial training thwarts the universal perturbations but fails in defending certain input-specific perturbations. To advance defense to cope with both universal and input-specific adversarial examples, we propose a new approach that simultaneously estimates the predictive uncertainty of any given input of voltage trajectory and thwarts the attacks effectively.
3|In recent years, the deployment of unmanned vehicle delivery services has increased unprecedentedly, leading to a need for enhanced security due to the risk of leaving high-value packages to an unauthorized third party during pickup or delivery. Existing authentication methods such as QR code and one-time password are inadequate, as they are susceptible to attacks and provide only one-way authentication. This paper, for the first time to our best knowledge, proposes Wave-for-Safe (W4S) --- a novel mutual authentication system that utilizes multi-modal sensors on both the user's smartphone and the unmanned vehicle. W4S uses random hand-waving by the legitimate user to achieve robust authentication by obtaining highly correlated sensory data measured by the Inertial Measurement Unit (IMU) in the smartphone and sensors in the unmanned vehicle (e.g., mmWave radar and camera). We propose several novel methods to overcome challenges such as heterogeneous data processing, asynchronization, and imitating attacks. The prototype is implemented on an unmanned vehicle and various smartphones, and evaluation in different real-world scenarios shows that W4S achieves an equal error rate below 0.013 against various attacks.
4|Low-rank matrix factorization (MF) decomposes a matrix into two low-dimensional matrices. One key algorithm for MF is distributed alternating least squares (ALS), iteratively learning the matrices. However, hardware, software, or network problems can cause distributed nodes (stragglers) to fail computation or communication. Existing algorithms neglect stragglers as a design concern. To address this, we propose D-ALS-MC (Distributed ALS Matrix Completion), a coding-assisted algorithm for distributed matrix completion. We analyze the trade-off between the maximum tolerable number of stragglers (recovery threshold) and coding redundancy (code rate), along with computational costs. Moreover, we prove that incomplete matrices satisfying the Restricted Isometry Property (R.I.P.) condition can recover original values. The experimental results demonstrate the effectiveness of our proposed methods.
5|Despite considerable advancements in specialized hardware, the majority of IoT edge devices still rely on CPUs. The burgeoning number of IoT users amplifies the challenges associated with performing multiple Deep Neural Network inferences on these resource-limited, CPU-only edge devices. Existing strategies, including model compression, hardware acceleration, and model partitioning, often involve a trade-off in inference accuracy, are unsuitable due to hardware specificity, or lead to inefficient resource utilization. In response to these challenges, this paper introduces L-PIC (Latency Minimized Parallel Inference on CPU)—a framework expressly devised to optimize resource allocation, decrease inference latency, and maintain result accuracy on CPU-only edge devices. A series of comprehensive experiments have verified the superior efficiency and effectiveness of the L-PIC framework in comparison to the state-of-the-art method. Remarkably, compared to the state-of-the-art method, L-PIC can reduce the inference latency of multi-DNN by an average of approximately 30% across all tested scenarios.

## network link
|num|name|
|--|--|
1|https://ieeexplore.ieee.org/abstract/document/10806990/
2|https://ieeexplore.ieee.org/abstract/document/9914610/
3|https://dl.acm.org/doi/abs/10.1145/3565287.3610253
4|https://ieeexplore.ieee.org/document/10404479/
5|https://ieeexplore.ieee.org/document/10621120/

## img-name

|num|name|
|--|--|
1|1.png
2|2.png
3|3.png
4|4.png
5|5.png

