import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Guide",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },{
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
  ],
});
