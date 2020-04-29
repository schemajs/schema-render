module.exports = [
  {
    text: '指南',
    link: '/zh/guide/base/intro'
  },
  {
    text: '案例',
    ariaLabel: '案例',
    items: [
      {
        text: '简单',
        link: '/zh/case/simple/'
      },
      {
        text: 'UI Lib Kitchen',
        items: [
          {
            text: 'Taro',
            link: '/zh/case/taro/'
          },
          {
            text: 'Taro-UI',
            link: '/zh/case/taro-ui/'
          },
          {
            text: 'Leap-UI',
            link: '/zh/case/leap-ui/'
          }
        ]
      },
    ]
  },
  {
    text: 'API',
    ariaLabel: 'API',
    items: [
      {
        text: '组件',
        link: '/zh/api/components'
      },
      {
        text: 'Store',
        link: '/zh/api/stores'
      },
      {
        text: 'Taro',
        link: '/zh/api/taro'
      },
      {
        text: 'Taro-UI',
        link: '/zh/api/taro-ui'
      },
      {
        text: 'Leap-UI',
        link: '/zh/api/leap-ui'
      },
    ]
  },
  {
    text: '了解更多',
    ariaLabel: '了解更多',
    items: [
      {
        text: '扩展开发指南',
        items: [
          // {
          //   text: '本地开发',
          //   link: '/zh/misc/local-development.html'
          // },
          {
            text: '设计理念',
            link: '/zh/misc/design-concepts.html'
          },
          {
            text: '递归渲染',
            link: '/zh/misc/recursive-render.html'
          },
          {
            text: '自定义组件',
            link: '/zh/misc/custom-component.html'
          },
          {
            text: '自定义组件库',
            link: '/zh/misc/custom-ui-lib.html'
          }
        ]
      },
      {
        text: '其他',
        items: [
          {
            text: '术语',
            link: '/zh/misc/glossary.html'
          },
          {
            text: 'FAQ',
            link: '/zh/misc/faq.html'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/schemajs/schema-ui/blob/master/CHANGELOG.md'
          }
        ]
      }
    ]
  }
]
