module.exports = {
  base:"/schema-ui/",
  title: 'SchemaUI',
  description: 'Schema 驱动的 UI 渲染器',
  locales: {
    '/en': {
      lang: 'en-US',
      title: 'SchemaUI',
      description: 'Schema-powered Renderer'
    },
    '/': {
      lang: 'zh-CN',
      title: 'SchemaUI',
      description: 'Schema 驱动的 UI 渲染器'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    displayAllHeaders: true, // 默认值：false
    smoothScroll: true,
    repo: 'https://github.com/schemajs/schema-ui',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'doc',
    locales: {
      '/en': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/en/api/': getApiSidebar("API","UI Lib"),
          '/en/guide/': getGuideSidebar('Guide','Concepts', 'Advanced'),
          '/en/case/':getCaseSidebar("Case","UI Lib"),
          '/en/misc/':getMiscSidebar("Extend Develop","Others")
        }
      },
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        // repoLabel:"查看源码",
        sidebar: {
          '/zh/api/': getApiSidebar("API","UI 库"),
          '/zh/guide/': getGuideSidebar('指南','概念/术语理解', '深入'),
          '/zh/case/':getCaseSidebar("案例","UI 库"),
          '/zh/misc/':getMiscSidebar("扩展开发","其他")
        }
      }
    },
    plugins: [
      ['@vuepress/back-to-top', true],
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }],
      ['@vuepress/medium-zoom', true],
      ['@vuepress/nprogress'],
      ['@vuepress/google-analytics', {
        ga: 'G-001C1B3ZV0'
      }],
      ['container', {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }],
      ['container', {
        type: 'upgrade',
        before: info => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>'
      }],
      ['flowchart']
    ],
    extraWatchFiles: [
      '.vuepress/nav/en.js',
      '.vuepress/nav/zh.js'
    ]
  },
};

function getApiSidebar (group1, group2) {
  return [
    {
      title: group1,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'components',
        'stores'
      ]
    },
    {
      title: group2,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'taro',
        'taro-ui',
        'leap-ui',
      ]
    }
  ]
}

function getCaseSidebar (group1, group2) {
  return [
    {
      title: group1,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'simple',
      ]
    },
    {
      title: group2,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'taro',
        'taro-ui',
        'leap-ui',
      ]
    }
  ]
}

function getMiscSidebar (group1, group2) {
  return [
    {
      title: group1,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'design-concepts',
        'recursive-render',
        'custom-component',
        'custom-ui-lib',
      ]
    },
    {
      title: group2,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'glossary',
        'faq',
      ]
    }
  ]
}

function getGuideSidebar (group1, group2,group3) {
  return [
    {
      title: group1,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'base/intro',
        'base/getting-started',
        'base/directory-structure',
      ]
    },
    {
      title: group2,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'concepts/schema',
        'concepts/path',
        'concepts/events',
        'concepts/mobx',
      ]
    },
    {
      title: group3,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'advance/layout',
        'advance/business',
        'advance/performance'
      ]
    },
    
  ]
}


