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



### 算法流程

![image-20231209162932395](./assets/image-20231209162932395.png)

总之先摆一个算法流程在这里，接下来对每一个过程做介绍

#### Initialization

![image-20231209145841128](./assets/image-20231209145841128.png)

先用SfM方法提取初始点云，从这些稀疏点云中初始化每个点的3DGS表达，其中包括以上属性。

协方差矩阵中R代表椭圆的旋转，S就是三个轴长
