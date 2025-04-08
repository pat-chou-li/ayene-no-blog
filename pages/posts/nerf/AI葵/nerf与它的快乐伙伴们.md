---
title: nerf和他的快乐伙伴们（AI葵）

date: 2023.10.25

categories: NeRF

tags:

 - 图形学
 - NeRF
---

### NeRF-W：nerf in the wild

不同照片中可能有会动的物体、或者是不同的时间（光照颜色不同）拍摄

试图学习那些始终存在的物体，只保留那些不动的物体。

同时学习到不同时间段的结果，对于同一个场景可以生成不同时间段的结果。

### NSFF

将运动场景划分为相机运动和物体运动

可以生成固定某一个运动或不固定任何一个运动的新视角

### D-nerf

同上

### Mip-nerf

![image-20231104161815435](./assets/image-20231104161815435.png)

### Nerfren

将镜面反射和其他物体分离，分开渲染，用两个辐射场表示

![image-20231104162201345](./assets/image-20231104162201345.png)

### Nerf++

能够重建无限远的物体

分开训练背景部分和近处物体

### Mip-nerf 360

同上

#### RawNerf：nerf in the dark

在夜间拍摄图片，自由调整亮度并去噪，调整曝光、焦距

### HyperNerf

处理那些拓扑会变化的场景，之前的NSFF处理的是刚体，虽然会运动但不会变化

### neural scene graphs

自动驾驶

### refnerf

### cityNerf

在城市不同高度的上空拍摄多组图片，来重建城市。

### pixelNerf、MVSNerf、IBSnerf

从少数图片中训练模型

### NVSF、PlenOctrees、KiloNerf

将空间进行细分

### Nerf--、Barf

不需要位姿，而是把位姿作为要训练出来的参数
