# 工作室技术博客

[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu) 
![](https://img.shields.io/badge/license-GPL-blue)
![](https://github.com/cumtflyingstudio/blog/workflows/Tencent%20Serverless/badge.svg)

[署名-非商业性使用-禁止演绎 4.0 国际](https://creativecommons.org/licenses/by-nc-nd/4.0/)

## 技术栈

博客用 Serverless 部署在[blog.atcumt.com](https://blog.atcumt.com)

基于`VuePress`和`@vuepress/theme-blog`插件构建页面

~~后台打算用`Golang`写一个任务队列，实现自动和手动更新~~

已用`GitHub Actions`配置自动部署（真香）

## 使用方法

1. 用 Markdown 写好一篇文章

2. clone 本项目到本地（如果已经 clone 请再 pull 一下）

3. 将.md 文件命名好后放在`blog/_posts`目录

4. commit 后 push

5. 等待Github Actions自动构建，部署结果在`Actions`选项里查看

## 使用规范

- 请使用 Markdown 语法书写，不熟悉语法的同学可以看看[这里](https://www.runoob.com/markdown/md-tutorial.html)

- .md 文件放在`/blog/_posts`目录下，为避免混乱，命名使用当前的**时间戳**，命名好的文件不要随意修改，否则不利于永久链接

- 务必书写合理的 title、tags、author 等头部信息，以便检索和归档（**看下面的示例**）

- 书写你认为有价值的内容，避免水文和一些不明意义的内容

- Markdown 中的图片请先上传至图床后再添加，使用本地 url 会导致图片失效

- commit 信息填本次添加或更新的博客标题，方便排查故障

## 小贴士

### 关于 Markdown 编辑器

你可以用 VScode 和 IDEA 等安装相关的插件，也有很多支持 Markdown 的编辑器下载

这里推荐一个 Mac 端的软件[MWeb](https://www.zhinin.com/mweb-mac.html)，支持同步、图床上传等

### 如何获取当前时间戳

**Unix Shell**（Linux 或 Mac 打开终端输入）

```shell
$ date +%s
```

**Python3**（Python 终端中输入）

```python
>>> import time
>>> time.time()
```

**JavaScript**（浏览器任意页面按 F12 进入 Console 输入）

```javascript
Math.round(new Date() / 1000)
```

**懒人选项**

点这里：
[时间戳](https://tool.lu/timestamp/)

### 我想提交自己的个人博客链接

请熟悉 Markdown 里的表格语法

1. 搭建你自己的博客站点

2. 在本项目`blog/member.md`下添加自己的博客信息（姓名、博客名、链接、介绍）

3. 和上面类似，commit 并 push，等待自动构建

4. 去[成员](https://blog.atcumt.com/member.html)页面查看

## Markdown 示例

文件名：1611596899.md

```markdown
---
title: 这是标题这是标题
date: 2020-01-11
tags:
  - Python
  - 算法
  - Django
author: 王昭君
location: 西安
summary: 这是摘要，如果不写，博客系统会自动提取摘要
---

## 标题 1

记得书写 title、date、tags 等信息噢！

## 标题 2

- tags 不宜超过 3 个
- author 请实名噢！
```
