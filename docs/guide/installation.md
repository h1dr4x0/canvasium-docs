# Installation

To use **Canvasium**, you need to install the core package along with its dependencies.

## 1. Install via npm

```bash
npm install canvasium
```

Canvasium internally uses the [`canvas`](https://www.npmjs.com/package/canvas) package, which requires native dependencies.

---

## 2. Install Native Dependencies (Linux/macOS)

Make sure you have the following installed:

```bash
# Ubuntu/Debian
sudo apt-get install -y libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev librsvg2-dev

# Arch
sudo pacman -S cairo libjpeg-turbo pango libpng

# macOS (with Homebrew)
brew install pkg-config cairo pango libpng jpeg giflib librsvg
```

---

## 3. Windows Users

> 💡 Easiest option: use the **prebuilt binaries**

```bash
npm install --global windows-build-tools
npm install canvasium
```

Or see [node-canvas installation guide](https://github.com/Automattic/node-canvas#installation) for manual steps.

---

## 4. Verify the Setup

Create a simple `index.ts` or `index.js` file:

```ts
import { render } from "canvasium";

const ctx = await render(`
  <body width="200" height="100" background="#000">
    <text x="20" y="40" color="#fff">It works!</text>
  </body>
`);

console.log(ctx.canvas.toDataURL());
```

If this runs without errors and outputs a base64 PNG, you're all set 🎉
