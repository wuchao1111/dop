DOP(容器镜像服务)需求文档
=========================

变更记录
--------

| 修改编号 | 版本 | 修改内容 | 修改人 | 修改日期   |
|----------|------|----------|--------|------------|
| 01       | v1.0 | 初建文档 | 辛志庭 | 2019-01-07 |
|          |      |          |        |            |

服务背景
--------

背景：**项目中需要引入镜像管理服务，通过镜像管理服务我们希望镜像管理服务能够完成对于镜像仓库的查看、管理，以及对于参与人员的基本权限管理。**

**基本功能概述：完成镜像服务中的用户管理；完成镜像的浏览、搜索、查看；主账户对于命名空间镜像仓库和子账户的管理；对于镜像仓库的管理。**

功能需求概览
------------

### 用户管理需求

| 功能点                 | M    | S    | C    | W    | 约束            | 估时 |
| ---------------------- | ---- | ---- | ---- | ---- | --------------- | ---- |
| 用户登录和注销         | Y    |      |      |      | 需要通过接入SSO | 1    |
| 修改用户的registry密码 | Y    |      |      |      |                 | 0.5  |
| 用户的权限管理         | Y    |      |      |      |                 | 1    |
| 用户的操作审计         |      | Y    |      |      |                 | 2    |
| 修改用户的个人信息     | Y    |      |      |      |                 | 0.5  |

### 镜像市场管理需求

| 功能点                     | M    | S    | C    | W    | 约束 | 估时 |
| -------------------------- | ---- | ---- | ---- | ---- | ---- | ---- |
| 显示全部镜像仓库           | Y    |      |      |      |      | 1    |
| 检索镜像仓库               |      | Y    |      |      |      | 2    |
| 详细显示单个镜像仓库       | Y    |      |      |      |      | 0.5  |
| 收藏镜像仓库               |      |      | Y    |      |      | 0.5  |
| 查看个人的镜像仓库收藏列表 |      |      | Y    |      |      | 1    |
| 取消镜像仓库的收藏         |      |      | Y    |      |      | 0.5  |

### 管理员对于命名空间的管理

| 功能点                     | M    | S    | C    | W    | 约束 | 估时 |
| -------------------------- | ---- | ---- | ---- | ---- | ---- | ---- |
| 创建命名空间               | Y    |      |      |      |      | 0.5  |
| 修改命名空间               | Y    |      |      |      |      | 0.5  |
| 删除命名空间               | Y    |      |      |      |      | 0.5  |
| 查看全部命名空间           | Y    |      |      |      |      | 0.5  |
| 查看单个命名空间的详细内容 | Y    |      |      |      |      | 0.5  |

### 主账号对于镜像仓库和子账号的管理

| 功能点                       | M | S | C | W | 约束 | 估时 |
|------------------------------|---|---|---|---|------|------|
| 查看全部镜像仓库             | Y |   |   |   |      | 1    |
| 查看单个镜像仓库的详细信息   | Y |   |   |   |      | 0.5  |
| 创建镜像仓库                 | Y |   |   |   |      | 0.5  |
| 修改镜像仓库                 | Y |   |   |   |      | 0.5  |
| 删除镜像仓库                 | Y |   |   |   |      | 0.5  |
| 添加子账号到镜像仓库         | Y |   |   |   |      | 0.5  |
| 修改子账号对于镜像仓库的权限 | Y |   |   |   |      | 0.5  |
| 从镜像仓库中删除子账号       | Y |   |   |   |      | 0.5  |

### 镜像仓库的基本管理

#### 镜像仓库的版本管理

| 功能点                 | M | S | C | W | 约束 | 估时 |
|------------------------|---|---|---|---|------|------|
| 查看全部版本信息       | Y |   |   |   |      | 2    |
| 查看某个版本的详细信息 | Y |   |   |   |      | 0.5  |
| 删除某个版本           | Y |   |   |   |      | 0.5  |

#### 镜像仓库的webhook管理

| 功能点                    | M    | S    | C    | W    | 约束 | 估时 |
| ------------------------- | ---- | ---- | ---- | ---- | ---- | ---- |
| 新增webhook               |      |      | Y    |      |      | 0.5  |
| 查看全部的webhook         |      |      | Y    |      |      | 1    |
| 查看单个webhook的详细信息 |      |      | Y    |      |      | 0.5  |
| 修改webhook               |      |      | Y    |      |      | 0.5  |

#### 镜像仓库的安全扫描

| 功能点                 | M    | S    | C    | W    | 约束 | 估时 |
| ---------------------- | ---- | ---- | ---- | ---- | ---- | ---- |
| 对镜像仓库进行安全扫描 |      |      | Y    |      |      | 0.5  |
| 给出镜像仓库的漏洞报告 |      |      | Y    |      |      | 2.5  |

#### 镜像仓库的镜像同步管理

| 功能点                     | M    | S    | C    | W    | 约束 | 估时 |
| -------------------------- | ---- | ---- | ---- | ---- | ---- | ---- |
| 将本地的镜像仓库同步到云端 |      |      | Y    |      |      | 0.5  |
| 将云端的镜像仓库同步到本地 |      |      | Y    |      |      | 0.5  |

功能需求详细描述
----------------

### 用户管理

1.用户的登录和注销

| 编号     | 01                                    |
|----------|---------------------------------------|
| 需求名称 | 用户的登录和注销                      |
| 描述     | 用户通过接入SSO来实现服务的登录和注销 |
| 优先级   | Must                                  |
| 预计时长 | 1                                     |

>   2.用户的个人信息管理

| 编号     | 02                                       |
|----------|------------------------------------------|
| 需求名称 | 用户的个人信息管理                       |
| 描述     | 用户可以修改自己的registry密码和个人信息 |
| 优先级   | Must                                     |
| 预计时长 | 1                                        |

··

3.用户的权限管理

| 编号     | 03                                 |
|----------|------------------------------------|
| 需求名称 | 用户的权限管理                     |
| 描述     | 用户对于项目镜像仓库的访问权限管理 |
| 优先级   | Must                               |
| 预计时长 | 2                                  |

4.对于用户的操作审计

| 编号     | 04                                 |
|----------|------------------------------------|
| 需求名称 | 对于用户的操作审计                 |
| 描述     | 记录用户对于项目镜像仓库的操作记录 |
| 优先级   | Must                               |
| 预计时长 | 2                                  |

### 镜像市场管理

5.镜像仓库的显示

| 编号     | 05                               |
|----------|----------------------------------|
| 需求名称 | 镜像仓库的显示                   |
| 描述     | 需要将已有项目镜像仓库的列表显示 |
| 优先级   | Must                             |
| 预计时长 | 1                                |

6.镜像仓库的检索

| 编号     | 06                               |
|----------|----------------------------------|
| 需求名称 | 镜像仓库的检索                   |
| 描述     | 需要将已有项目镜像仓库的进行检索 |
| 优先级   | Should                           |
| 预计时长 | 2                                |

7.镜像仓库的详情查看

| 编号     | 07                                                 |
|----------|----------------------------------------------------|
| 需求名称 | 镜像仓库的详情查看                                 |
| 描述     | 需要详细显示镜像仓库中的镜像详情，可以采用列表显示 |
| 优先级   | Must                                               |
| 预计时长 | 0.5                                                |

8.镜像仓库的收藏

| 编号     | 08                                                            |
|----------|---------------------------------------------------------------|
| 需求名称 | 镜像仓库的收藏                                                |
| 描述     | 已经登录的用户可以对镜像仓库进行收藏、取消 收藏、显示收藏列表 |
| 优先级   | Should                                                        |
| 预计时长 | 2.5                                                           |

### 主账号对于镜像和用户的管理

9.对于项目镜像仓库的管理

| 编号     | 09                                   |
|----------|--------------------------------------|
| 需求名称 | 对于项目镜像仓库的管理               |
| 描述     | 包括镜像仓库的创建、修改、删除、查看 |
| 优先级   | Must                                 |
| 预计时长 | 3                                    |

10.对于项目成员的管理

| 编号     | 10                                                           |
|----------|--------------------------------------------------------------|
| 需求名称 | 对于项目成员的管理                                           |
| 描述     | 包括成员在项目中担任的角色以及成员对于项目镜像仓库的权限管理 |
| 优先级   | Must                                                         |
| 预计时长 | 1.5                                                          |

11.对于团队项目的命名空间的管理

| 编号     | 11                                 |
|----------|------------------------------------|
| 需求名称 | 对于团队项目的命名空间的管理       |
| 描述     | 主账号能够创建和修改、删除命名空间 |
| 优先级   | Should                             |
| 预计时长 | 2.5                                |

### 镜像仓库的基本管理

12.对于镜像仓库的版本控制

| 编号     | 12                                                                          |
|----------|-----------------------------------------------------------------------------|
| 需求名称 | 对于镜像仓库的版本控制                                                      |
| 描述     | 包括查看镜像仓库的版本信息，查看版本详细信息，log记录，以及删除历史版本操作 |
| 优先级   | Must                                                                        |
| 预计时长 | 3                                                                           |

13.对于镜像仓库的安全扫描

| 编号     | 13                               |
|----------|----------------------------------|
| 需求名称 | 对于镜像仓库的安全扫描           |
| 描述     | 进行镜像的安全扫描，给出漏洞报告 |
| 优先级   | Should                           |
| 预计时长 | 2.5                              |

14.对于触发器的基本操作

| 编号     | 14                                                         |
|----------|------------------------------------------------------------|
| 需求名称 | 对于触发器的基本操作                                       |
| 描述     | 可以为项目仓库添加，修改，删除和查看触发器，实现出发器部署 |
| 优先级   | Should                                                     |
| 预计时长 | 2.5                                                        |

15.镜像同步操作

| 编号     | 15                               |
|----------|----------------------------------|
| 需求名称 | 镜像同步操作                     |
| 描述     | 能够完成本地仓库和镜像仓库的同步 |
| 优先级   | Should                           |
| 预计时长 | 1                                |

说明
----

1.  所有需求的预计时长的单位为：人日

2.  优先级采用的是MoSCoW方法