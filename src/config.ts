import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "나현블로그",
	subtitle: "student",
	lang: "ko", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/banner-light.svg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		srcLight: "assets/images/banner-light.svg", // (Optional) Banner image used in light mode. Fallbacks to `src` when omitted
		srcDark: "assets/images/banner-dark.svg", // (Optional) Banner image used in dark mode. Fallbacks to `src` when omitted
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/nAhYUN22", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/y-nana",
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar-light.svg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	avatarLight: "assets/images/avatar-light.svg", // (Optional) Profile image used in light mode. Fallbacks to `avatar` when omitted
	avatarDark: "assets/images/avatar-dark.svg", // (Optional) Profile image used in dark mode. Fallbacks to `avatar` when omitted
	name: "이나현",
	bio: "student",
	links: [
		{
			name: "LinkedIn",
			icon: "fa6-brands:linkedin", // Visit https://icones.js.org/ for icon codes
			url: "https://www.linkedin.com/in/y-nana",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/nAhYUN22",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
