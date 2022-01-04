module.exports = {
  "title": "King's Blog",
  "description": "King的学习笔记/博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "plugins": ['vuepress-plugin-mathjax', [
    "vuepress-plugin-auto-sidebar",
    {
      collapse: {
        open: true,
      },title: {
        mode: "titlecase",
        map: {}
      },
      sidebarDepth: 1,
    },
  ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "使用文档",
            "link": "/docs/usage/"
          },
          {
            "text": "基础知识",
            "link": "/docs/basic/"
          }
        ]
      },
      {
        "text": "联系作者",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/linsyking",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "类型"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "KKAnime",
        "desc": "观看动画",
        "email": "1221998692@163.com",
        "link": "http://anime.yydbxx.cn"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "King",
    "record": "沪公网安备 31010702007182号",
    "startYear": "2021",
    "subSidebar": 'auto',
    "mode": 'light',
    "modePicker": false
  },
  "markdown": {
    "lineNumbers": true
  }
}
