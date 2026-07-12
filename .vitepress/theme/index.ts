import DefaultTheme from "vitepress/theme";
import HomeHero from "./components/HomeHero.vue";
import ContentDirectory from "./components/ContentDirectory.vue";
import VisitStats from "./components/VisitStats.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("HomeHero", HomeHero);
    app.component("ContentDirectory", ContentDirectory);
    app.component("VisitStats", VisitStats);
  },
};
