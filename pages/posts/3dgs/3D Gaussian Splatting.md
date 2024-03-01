---
title: 3D Gaussian Splatting

date: 2023.12.9

categories: 3D Gaussian Splatting

tags:

 - 图形学
 - NeRF
 - 3DGS
---

### 论文本体

#### Adaptive Control of Gaussians

一些超参数：

warm-up后启用：指500次迭代后开始，因为一开始用1/4分辨率训练，250次迭代后做一次上采样，500次迭代后做第二次上采样

$\epsilon_{\alpha}$ ：每100次迭代移除α低于该阈值的高斯

$τ_{pos}$： 在view space下average magnitude of view-space position gradients（也就是xyz的梯度比较大的，即模型正在试图移动高斯来拟合）高于该阈值的会被densification（default：0.0002，代码中为percent_dense）

$\phi$ ： 高斯被split后，新的高斯的大小为原来的$\phi$倍（default：1.6）

每3000次迭代将α设置为接近0（将所有的高斯核透明度重置，那些真正有用的高斯核在后续优化中会回到它应有的透明度，不需要的高斯则在后续被剔除），这是为了控制高斯增长的速度

定期删除world space中非常大的高斯，和在view space中占一大块的高斯

### 算法流程

![image-20231209162932395](./assets/image-20231209162932395.png)

总之先摆一个算法流程在这里，接下来对每一个过程做介绍

#### Initialization

![image-20231209145841128](./assets/image-20231209145841128.png)

先用SfM方法提取初始点云，从这些稀疏点云中初始化每个点的3DGS表达，其中包括以上属性。

协方差矩阵中R代表椭圆的旋转，S就是三个轴长
