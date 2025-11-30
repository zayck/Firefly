import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
  title: "公告", // 公告标题
  content: "欢迎来到我的博客！！！恭喜你找到了一个科技树越点越歪的个人博主🎉🎉🎉", // 公告内容
  closable: false, // 允许用户关闭公告
  link: {
    enable: true, // 启用链接
    text: "了解更多", // 链接文本
    url: "https://mp.weixin.qq.com/mp/homepage?__biz=MzU2MTI5MzE4OA==&hid=1&sn=356f3016aeac48fc034804fca1307349&scene=18#wechat_redirect", // 链接 URL
    external: true, // 外部链接
  },
};
