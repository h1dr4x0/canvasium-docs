import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Canvasium",
  description: "Markup-based canvas rendering engine for Node.js",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Guide",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/guide/introduction" },
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Installation", link: "/guide/installation" },
          { text: "Usage with Node.js", link: "/guide/node-usage" },
        ],
      },
      {
        text: "Examples",
        items: [{ text: "Rank Card", link: "/examples/rank-card" }],
      },
      {
        text: "Components",
        collapsed: false,
        items: [
          { text: "Card Component", link: "/components/card" },
          { text: "Text Component", link: "/components/text" },
          { text: "Image Component", link: "/components/image" },
          { text: "Bar Component", link: "/components/bar" },
        ],
      },
      {
        text: "Advanced",
        collapsed: false,
        items: [
          { text: "Data Binding", link: "/advanced/data-binding" },
          { text: "Custom Components", link: "/advanced/custom-components" },
          { text: "Plugin System", link: "/advanced/plugins" },
        ],
      },
      {
        text: "API Reference",
        collapsed: false,
        items: [
          { text: "render()", link: "/api/render" },
          { text: "renderFile()", link: "/api/render-file" },
          { text: "Component Context", link: "/api/context" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/h1dr4x/canvasium-docs" },
    ],
  },
});
