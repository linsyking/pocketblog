---
title: pyecharts库使用说明
date: 2022-01-04
tags:
 - python
categories: 
 - 编程
---

## 1. 安装

安装：

```bash
pip install pyecharts
```

## 2. 使用

例子：使用Bar

```python
from pyecharts.charts import Bar
from pyecharts import options as opts
bar = Bar()
bar.set_global_opts(title_opts=opts.TitleOpts(title="Main",subtitle="Sub"))
bar.add_xaxis(["sa","sb","sc"])
bar.add_yaxis("Xa",[2,3,4])
CFile="./main.html"
bar.render(CFile)
```

