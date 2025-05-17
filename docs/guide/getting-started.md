# Getting Started

Canvasium makes it easy to generate canvas-based images using markup. This guide will walk you through setting it up in your Node.js project.

## 1. Install the Package

You can install Canvasium via npm:

```bash
npm install canvasium
```

> Canvasium depends on the [`canvas`](https://www.npmjs.com/package/canvas) package. Make sure your system meets the requirements to build native modules (like `libcairo`, `libjpeg`, etc.).

---

## 2. Import and Use

Here's a minimal example:

```ts
import { render } from "canvasium";
import fs from "fs";

const markup = `
  <body width="400" height="200" background="#f5f5f5">
    <text x="20" y="40" font="24px sans-serif" color="#333">Hello Canvasium!</text>
  </body>
`;

const ctx = await render(markup);
ctx.canvas.createPNGStream().pipe(fs.createWriteStream("output.png"));
```

This will create a `400x200` PNG image with some text in it.

---

## 3. Where to Go Next?

- [Installation](./installation.md): Set up native fonts & canvas backend
- [Node Usage](./node-usage.md): Run Canvasium in scripts or servers
- [Components](../components/card.md): Start using `<card>`, `<text>`, `<image>` and more
