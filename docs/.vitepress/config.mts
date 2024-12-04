// 1. 导入 defineConfigWithTheme 函数
import { defineConfigWithTheme } from 'vitepress'

// 2. 导入需要继承的配置对象
import escookConfig from '@escook/vitepress-theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  base: '/notes/',
  lang: 'zh-CN',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // 3. 通过 extends 指定要继承的配置
  extends: escookConfig,
  title: "航航笔记",
  description: "记录开发笔记",
  appearance: 'force-dark',
  themeConfig: {
    lastUpdated: {
      text: '最后一次更新于：',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    editLink: {
      pattern: 'https://github.com/QiHang999/notes/tree/master/docs/:path',
      text: '在 gitee 上编辑此页'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              }
            }
          },
        }
      }
    },
    // 4. 通过此配置项，启用鼠标点击的 confetti 效果
    confetti: true,
    // 5. 通过此配置项，启用背景音乐的小组件
    musicBall: {
      src: '/20241203.mp3',
      autoplay: true,
      loop: true
    },
    logo: '/favicon.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/note/javascript/js-note1', activeMatch: '/note/'},
      { text: '插件工具', link: '/lib/good/index', activeMatch: '/lib/' },
      { text: 'Python', link: '/py/basic/', activeMatch: '/py/' },
      { text: '关于我', link: '/me' }
    ],
    sidebar: {
      '/note/': [
        {
          text: 'JavaScript',
          collapsed: true,
          items: [
            { text: 'JS中apply、call和bind的区别', link: '/note/javascript/js-note1' },
            { text: 'JS 中的闭包是什么', link: '/note/javascript/js-note2' },
            { text: 'ES6的新语法与特性总结(一)', link: '/note/javascript/js-note3' },
            { text: '什么是 js 内存泄露', link: '/note/javascript/js-note4' },
            { text: 'JS 中的 this 指向问题', link: '/note/javascript/js-note5' },
            { text: 'Js 的函数节流和函数防抖的区别', link: '/note/javascript/js-note6' },
          ]
        },
        {
          text: 'Css',
          collapsed: true,
          items: [
            { text: 'CSS下的buttn（一）', link: '/note/css/css-note1' }
          ]
        },
        {
          text: '函数&类',
          collapsed: true,
          items: [
            { text: '箭头函数与普通函数的区别 ', link: '/note/func/func-note1' }
          ]
        },
        {
          text: '文章',
          collapsed: true,
          items: [
            { text: 'ES6的新语法与特性总结(一)', link: '/note/art/art-note1' }
          ]
        }
      ],
      '/lib/': [
        {
          text: '参考',
          // collapsed: false,
          items: [
            { text: '推荐', link: '/lib/good/' },
            { text: '收集记录', link: '/lib/repository/' },
          ]
        }
      ],
      '/py/': [
        {
          text: 'Python基础',
          collapsed: true,
          items: [
            { text: 'Python简介', link: '/py/basic/' },
          ]
        }
      ],
    },
    outline: {
      level: 'deep',
      label: '页面导航'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/QiHang999/notes' }
    ],
    footer: {
      message: '🐋 ’▾‘🐋',
      copyright: 'Copyright © 2022-present 启航'
    }
  },
  vite: {
    ssr: {
      noExternal: ['@escook/vitepress-theme', 'vitepress']
    }
  }
})
