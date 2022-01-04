---
title: 图
date: 2022-01-04
---

## 存储图的基本策略

### 稠密图

特征：点很少，100-1000左右。

- 邻接矩阵

### 稀疏图
特征：点较多，边相对较少。

- 邻接表
- 链式前向星

## 链式前项星

需要以下变量：
- head[MAXN]：记录以该点为起点的边的链表头
- edge：当前边的编号
- tail[MAXM]：记录该边指向的顶点
- nextedge[MAXM]：记录边链表中的下一跳边
- weight[MAXM]\(可选\)：记录边权

### 示例
```cpp
#include <bits/stdc++.h>
using namespace std;
const int MAXN=1000;
const int MAXM=10000;

int head[MAXN]={};
int edge=0;
int tail[MAXM]={};
int nextedge[MAXM]={};
int weight[MAXM]={};
int n,m;

void connect(int i,int j,int w){  //Connect i->j with weight w
    nextedge[edge]=head[i];
    head[i]=edge;
    weight[edge]=w;
    tail[edge]=j;
    edge++;
}

int main(){
    cin>>n>>m;
    for(int i=0;i<m;++i){
        int a,b,c;
        cin>>a>>b>>c;
        connect(a,b,c);
    }
    return 0;
}
```
