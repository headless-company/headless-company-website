// @ts-check
import { defineConfig } from "astro/config";
import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  integrations: [
    webmanifest({
      /**
       * required
       **/
      name: "The Headless Company",

      /**
       * optional
       **/
      icon: "src/assets/favicon.svg", // source for favicon & icons

      short_name: "HeadlessCo",
      description: "Headless CMS migrations. Done right.",
      start_url: "/",
      theme_color: "#fe2c54",
      background_color: "#fe2c54",
      display: "fullscreen",
    }),
  ],
});
