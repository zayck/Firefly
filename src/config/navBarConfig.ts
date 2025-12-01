import {
	LinkPreset,
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";
import { siteConfig } from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
	const links: (NavBarLink | LinkPreset)[] = [
		LinkPreset.Home,
		/* LinkPreset.Archive, */
	];

	// 支持自定义导航栏链接,并且支持多级菜单
	links.push({
    name: "少阳手记",
    url: "/links/",
    icon: "material-symbols:book-2-rounded",
    children: [
      {
        name: "玩易",
        url: "/archive/?category=玩易",
        external: true,
        icon: "material-symbols:owl",
      },
      {
        name: "玄黄",
        url: "/archive/?category=玄黄",
        external: true,
        icon: "material-symbols:planet",
      },
      {
        name: "燃灯",
        url: "/archive/?category=燃灯",
        external: true,
        icon: "material-symbols:candle-sharp",
      },
      {
        name: "草堂",
        url: "/archive/?category=草堂",
        external: true,
        icon: "fa6-solid:clover",
      },
      {
        name: "青囊",
        url: "/archive/?category=青囊",
        external: true,
        icon: "material-symbols:eco",
      },
      {
        name: "廿四",
        url: "/archive/?category=廿四",
        external: true,
        icon: "material-symbols:moon-stars",
      },
      {
        name: "妖言",
        url: "/archive/?category=妖言",
        external: true,
        icon: "material-symbols:comment",
      },
      {
        name: "坐忘",
        url: "/archive/?category=坐忘",
        external: true,
        icon: "material-symbols:cannabis",
      },
    ],
  });

  links.push({
    name: "少阳研究所",
    url: "/links/",
    icon: "material-symbols:chess-knight",
    children: [
      {
        name: "效率软件",
        url: "/archive/?category=效率软件",
        external: true,
        icon: "material-symbols:workspace-premium-rounded",
      },
      {
        name: "神级网站",
        url: "/archive/?category=神级网站",
        external: true,
        icon: "material-symbols:chess-queen",
      },
      {
        name: "浏览器插件",
        url: "/archive/?category=浏览器插件",
        external: true,
        icon: "material-symbols:settings-rounded",
      },
      {
        name: "Hexo 魔改",
        url: "/archive/?category=Hexo 魔改",
        external: true,
        icon: "fa6-solid:square-h",
      },
      {
        name: "Hugo 魔改",
        url: "/archive/?category=Hugo 魔改",
        external: true,
        icon: "fa6-brands:hackerrank",
      },
      {
        name: "Astro 魔改",
        url: "/archive/?category=Astro 魔改",
        external: true,
        icon: "fa6-brands:buysellads",
      },
      {
        name: "Obsidian教程",
        url: "/archive/?category=Obsidian教程",
        external: true,
        icon: "material-symbols:markdown",
      },
    ],
  });

/* 	links.push(LinkPreset.Friends); */

	// 根据配置决定是否添加留言板页面
/* 	if (siteConfig.pages.guestbook) {
		links.push(LinkPreset.Guestbook);
	} */


  links.push({
    name: "导航",
    url: "/links/",
    icon: "fa6-solid:location-arrow",
    children: [
      {
        name: "个人主页",
        url: "https://zayck-top.pages.dev",
        external: true,
        icon: "material-symbols:train-rounded",
      },
      {
        name: "音乐站",
        url: "https://zayck-music.pages.dev",
        external: true,
        icon: "material-symbols:music-cast",
      },
      {
        name: "工具箱",
        url: "/navigation",
        external: true,
        icon: "material-symbols:build",
      },
      {
        name: "云网盘",
        url: "https://zayck-pan.pages.dev",
        external: true,
        icon: "material-symbols:backup",
      },
    ],
  });

	links.push({
		name: "关于",
		url: "/content/",
		icon: "material-symbols:info",
		children: [
			LinkPreset.About,
			/* ...(siteConfig.pages.bangumi ? [LinkPreset.Bangumi] : []), // 根据配置决定是否添加番组计划页面 */
			...(siteConfig.pages.guestbook ? [LinkPreset.Guestbook] : []), // 根据配置决定是否添加留言板页面
			LinkPreset.Friends,
			...(siteConfig.pages.sponsor ? [LinkPreset.Sponsor] : []), // 根据配置决定是否添加赞助页面



		],
	});
	// 仅返回链接，其它导航搜索相关配置在模块顶层常量中独立导出
	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	// 可选：PageFind， MeiliSearch
	// 选择PageFind时：NavBarSearchMethod.PageFind,
	// 选择MeiliSearch时：NavBarSearchMethod.MeiliSearch,
	method: NavBarSearchMethod.PageFind,
	// 当选择 MeiliSearch 时的配置
	meiliSearchConfig: {
		INDEX_NAME: "posts",
		CONTENT_DIR: "src/content/posts",
		MEILI_HOST: "http://localhost:7700",
		PUBLIC_MEILI_HOST: "http://localhost:7700",
		PUBLIC_MEILI_SEARCH_KEY:
			"41134b15079da66ca545375edbea848a9b7173dff13be2028318fefa41ae8f2b",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
