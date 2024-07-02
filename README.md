# VitepressDoc

该项目是一个 基于 vitepress 引擎+Vue3 渲染的纯静态 MD 文档

# 运行/构建

编写完 md 文件后只需要 yarn build 提交即可

```markdown
yarn //依赖安卓

yarn dev //项目运行

yarn build //项目打包
```

# 目录结构

```markdown
- docs // 文档核心目录
  - .vitepress
    - cache // vitepress 项目默认生成
    - dist // yarn build 生成的。发布生产时的资源文件
    - theme // 首页主题图标样式配置
      - style
        - var.css // 图标渐变色配置核心文件
      - index.ts
    - confing.ts // 文档配置核心文件
  - XXXX // 对于菜单配置的 MD 存放路径
    - index.md
    - version.md
  - public // 静态资源目录
  - index.md // 文档首页配置页面
- deploy.sh // 发布 dist 文档内容到 gitee
- deployall.sh // 发布整个项目到 gitee
- package-locak.json // 默认生成
- package.json // 默认生成
- README.md // 项目文档
- yarn.lock // 默认生成
```

# config.ts 配置文件

## 全局配置

<table style="width:90%">
    <tr><th width="30%">配置项</th><th>说明</th></tr>
    <tr><td>浏览器tab logo配置</td>
        <td>
            head: [
                ['link', { rel: 'icon', href: '/xxxx/logo.ico' }]
            ]
        </td>
    </tr>
    <tr><td>站点配置</td>
        <td>
            base: '/xxxx/'
        </td>
    </tr>
    <tr><td>是否显示最新更新时间</td>
        <td>
            lastUpdated: true
        </td>
    </tr>
    <tr><td>是否显示代码行号</td>
        <td>
            markdown: {
                lineNumbers: true // 显示行号
            }
        </td>
    </tr>
    <tr><td>主题配置</td>
        <td>
             themeConfig:{}
        </td>
    </tr>
</table>

## themeConfig 主题配置

<table style="width:90%">
    <tr><th width="30%">配置项</th><th>说明</th></tr>
    <tr><td>返回顶部内容</td>
        <td>
            returnToTopLabel: '返回顶部'
        </td>
    </tr>
    <tr><td>右侧大纲文本配置</td>
        <td>
           outline: {
            level: "deep",
            label: "目录", 
            }
        </td>
    </tr>
    <tr><td>首页社交配置</td>
        <td>
            socialLinks: [{ icon: 'github', link: "https://github.com" }],
        </td>
    </tr>
    <tr><td>上次更新文本配置</td>
        <td>
            lastUpdatedText: '上次更新',
        </td>
    </tr>
    <tr><td>页脚配置</td>
        <td>
             footer: {
                message: 'Released 1.3.0 ',
                copyright: 'Copyright © 2024'
             }
        </td>
    </tr>
    <tr><td>头部导航配置</td>
        <td>
             nav: [
                { text: '首页', link: '/' },
                { text: '指南', link: '/xxxx/', activeMatch: '/xxxx' }
            ],
        </td>
    </tr>
    <tr><td>左边导航配置</td>
        <td>
             sidebar: {
                '/xxxx/': [
                    {
                    text: '指南',
                    items: [
                        { text: 'xxx', link: '/xxxx/xxx' },
                    ]
                    }
                ]
             }
        </td>
    </tr>
    <tr><td>文档页脚配置</td>
        <td>
            docFooter: { prev: '上一篇', next: '下一篇' }
        </td>
    </tr>
</table>
