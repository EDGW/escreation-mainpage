import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "指南",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },{
      text: "地图", 
      icon: "map", 
      prefix: "map/",
      children:[
        {
          text: "世界地图",
          icon: "globe",
          link: "/map/world/"
        }, 
        {
          text: "铁路地图",
          icon: "train",
          link: "https://www.escreation.cn/map/railway/"
        }, 
      ]
    }
  ],
});
