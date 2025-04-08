import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://pat-chou-li.github.io/ayene-no-blog',
  lang: 'zh-CN',
  title: 'ayane no blog',
  subtitle: 'Cry to the moon.',
  author: {
    name: '水沢绫音',
    avatar: 'https://raw.githubusercontent.com/pat-chou-li/ayene-no-blog/main/resource/avatar.jpg'
  },
  description: '我从来没有觉得学图形学开心过。',
  encrypt:{
    enable:true
  },
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    // {
    //   name: 'QQ 群 ',
    //   link: '',
    //   icon: 'i-ri-qq-line',
    //   color: '#12B7F5',
    // },
    {
      name: 'GitHub',
      link: 'https://github.com/pat-chou-li',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    // {
    //   name: '微博',
    //   link: '',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '豆瓣',
    //   link: '',
    //   icon: 'i-ri-douban-line',
    //   color: '#007722',
    // },
    // {
    //   name: '网易云音乐',
    //   link: 'https://music.163.com/#/user/home?id=',
    //   icon: 'i-ri-netease-cloud-music-line',
    //   color: '#C20C0C',
    // },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/shui-ze-ling-yin-46',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/8929945?spm_id_from=333.1007.0.0',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    // {
    //   name: '微信公众号',
    //   link: '',
    //   icon: 'i-ri-wechat-2-line',
    //   color: '#1AAD19',
    // },
    // {
    //   name: 'Twitter',
    //   link: 'https://twitter.com/',
    //   icon: 'i-ri-twitter-line',
    //   color: '#1da1f2',
    // },
    // {
    //   name: 'Telegram Channel',
    //   link: 'https://t.me/elpsycn',
    //   icon: 'i-ri-telegram-line',
    //   color: '#0088CC',
    // },
    {
      name: 'E-Mail',
      link: 'patchouli13@163.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    // {
    //   name: 'Travelling',
    //   link: '',
    //   icon: 'i-ri-train-line',
    //   color: 'var(--va-c-text)',
    // },
  ],

  search: {
    enable: true,
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      // {
      //   name: '支付宝',
      //   url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
      //   color: '#00A3EE',
      //   icon: 'i-ri-alipay-line',
      // },
      // {
      //   name: 'QQ 支付',
      //   url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
      //   color: '#12B7F5',
      //   icon: 'i-ri-qq-line',
      // },
      // {
      //   name: '微信支付',
      //   url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
      //   color: '#2DC100',
      //   icon: 'i-ri-wechat-pay-line',
      //},
    ],
  },
})
