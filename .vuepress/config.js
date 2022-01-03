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
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "使用文档",
            "link": "/docs/usage/"
          }
        ]
      },
      {
        "text": "Contact",
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
    "sidebar": {
      "/docs/usage/": [
        "",
        "rubric"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
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
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}