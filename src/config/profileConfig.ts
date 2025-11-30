import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
  avatar: "/assets/images/avatar.webp",
  name: "Zayck",
  bio: "",
  links: [
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/zayck",
    },
    {
      name: "WeChat",
      icon: "fa6-brands:weixin",
      url: "https://mp.weixin.qq.com/mp/homepage?__biz=MzU2MTI5MzE4OA==&hid=1&sn=356f3016aeac48fc034804fca1307349&scene=18#wechat_redirect",
    },
    {
      name: "Bilibli",
      icon: "fa6-brands:bilibili",
      url: "https://space.bilibili.com/341981702",
    },
    {
      name: "Rss",
      icon: "fa6-solid:rss",
      url: "/rss.xml",
    },
  ],
};
