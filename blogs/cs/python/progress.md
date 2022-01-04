---
title: progress库使用说明
date: 2022-01-04
tags:
 - python
categories: 
 - 编程
---

python进度条应用

## Usage

```python
from progress.bar import Bar

bar = Bar('Processing', max=20, suffix='%(index)d/%(max)d - %(percent).2f%% - [%(elapsed)ds<%(eta)ds]')
for i in range(20):
    # Do some work
    bar.next()
bar.finish()
```

 

## Bugs

在用`pyinstaller`打包后进度条显示异常
