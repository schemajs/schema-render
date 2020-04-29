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
          //   link: '/zh/miscellaneous/local-development.html'
          // },
          {
            text: '设计理念',
            link: '/zh/miscellaneous/design-concepts.html'
          },

          {
            text: '递归渲染',
            link: '/zh/miscellaneous/recursive-render.html'
          },
          {
            text: '自定义组件',
            link: '/zh/miscellaneous/custom-component.html'
          },
          {
            text: '自定义组件库',
            link: '/zh/miscellaneous/custom-ui-lib.html'
          },
          {
            text: 'FAQ',
            link: '/zh/miscellaneous/faq.html'
          },
          {
            text: '术语',
            link: '/zh/miscellaneous/glossary.html'
          }
        ]
      },
      {
        text: '其他',
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/schemajs/schema-ui/blob/master/CHANGELOG.md'
          }
        ]
      }
    ]
  }
]
