import type { SponsorConfig } from "../types/config";

export const sponsorConfig: SponsorConfig = {
  title: "", // 页面标题，如果留空则使用 i18n 中的翻译
  description:
    "", // 页面描述文本，如果留空则使用 i18n 中的翻译
  usage:
    "您的赞助将用于服务器维护、内容创作和功能开发，帮助我持续提供优质内容。", // 赞助用途说明
  // 是否显示赞助者列表
  showSponsorsList: true,
  // 是否在文章详情页底部显示赞助按钮
  showButtonInPost: true,

  // 赞助方式列表
  methods: [
    {
      name: "支付宝",
      icon: "fa6-brands:alipay",
      qrCode: "/assets/images/sponsor/alipay.webp", // 收款码图片路径（需要放在 public 目录下）
      link: "",
      description: "使用 支付宝 扫码赞助",
      enabled: true,
    },
    {
      name: "微信",
      icon: "fa6-brands:weixin",
      qrCode: "/assets/images/sponsor/wechat.webp", // 收款码图片路径
      link: "",
      description: "使用 微信 扫码赞助",
      enabled: true,
    },
    {
      name: "公众号",
      icon: "simple-icons:wechat",
      qrCode: "",
      link: "https://mp.weixin.qq.com/mp/homepage?__biz=MzU2MTI5MzE4OA==&hid=1&sn=356f3016aeac48fc034804fca1307349&scene=18#wechat_redirect",
      description: "免费三连就是最大的支持",
      enabled: true,
    },
    {
      name: "Bilibili",
      icon: "fa6-brands:bilibili",
      qrCode: "",
      link: "https://space.bilibili.com/341981702",
      description: "免费三连就是最大的支持",
      enabled: true,
    },
  ],

  // 赞助者列表（可选）
  sponsors: [
    // 示例：已实名赞助者
    {
      name: "夏叶",
      amount: "¥50",
      date: "2025-10-01",
      message: "感谢分享！",
    },
    // 示例：匿名赞助者
    {
      name: "匿名用户",
      amount: "¥20",
      date: "2025-10-01",
    },
  ],
};
