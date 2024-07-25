import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  "/en/guide/"
  ,{
    text: "Map", 
    icon: "map", 
    prefix: "map/",
    children:[
      {
        text: "World Map",
        icon: "globe",
        link: "/map/world/"
      }, 
      {
        text: "Railway Map",
        icon: "train",
        link: "/map/railway/"
      }, 
    ]
  }
]);
