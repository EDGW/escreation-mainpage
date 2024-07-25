import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Escreation 服务器",
      description: "Escreation 服务器",
    },
    "/en/": {
      lang: "en-US",
      title: "Escreation",
      description: "Escreation",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
