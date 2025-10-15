// @ts-check
import { defineConfig } from "astro/config";
import webmanifest from "astro-webmanifest";
import robotsTxt from "astro-robots-txt";
import sitemap from "astro-sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://headless.company',
  integrations: [webmanifest({
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
  }), robotsTxt(), sitemap()],

  adapter: netlify(),
});
