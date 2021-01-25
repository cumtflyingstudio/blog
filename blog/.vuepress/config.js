module.exports = {
    title: '翔工作室技术博客',
    description: 'Flying Studio',
    theme: '@vuepress/theme-blog',
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        nav: [
            { text: '文章', link: '/' },
            { text: '标签', link: '/tag/' },
            { text: '关于', link: '/about' },
            { text: '成员', link: '/member' }
        ],
        footer: {
            concact: [
                { type: 'github', link: 'https://github.com/cumtflyingstudio' },
                { type: 'mail', link: 'flyingstudio@yeah.net' },
                { type: 'web', link: 'https://atcumt.com' },
            ],
            copyright: [
                { text: 'MIT Licensed | Copyright © 2021 翔工作室' }
            ]
        },
        directories: [{
            id: '文章',
            dirname: '_posts',
            path: '/'
        }],
        frontmatters: [{
            id: '标签',
            keys: ['tag', 'tags'],
            path: '/tag/',
        }],
    },
    dest: './dist',
    head: [
        ['link', { rel: 'icon', href: '/assets/studio.png' }]
    ]
}