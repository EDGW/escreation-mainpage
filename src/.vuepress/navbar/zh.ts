import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/guide/",,{
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
        link: "/map/railway/"
      }, 
    ]
  }
]);
