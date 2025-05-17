# Usage with Node.js

Canvasium is built for Node.js. You can use it in backend services, bots, CLI tools, or any server-side rendering workflow.

---

## Basic Usage

Here's a simple Node.js script that renders a canvas image and writes it to a file:

```ts
import { render } from "canvasium";
import fs from "fs";

const markup = `
  <body width="300" height="100" background="#222">
    <text x="20" y="40" font="24px sans-serif" color="#fff">Canvasium Rendered!</text>
  </body>
`;

const ctx = await render(markup);
ctx.canvas.createPNGStream().pipe(fs.createWriteStream("output.png"));
```

---

## Rendering from File

Canvasium supports loading markup from external files:

```ts
import { renderFile } from "canvasium";

const ctx = await renderFile("./templates/profile-card.csm", {
  username: "h1dr4x",
  level: 27,
});

ctx.canvas.createPNGStream().pipe(fs.createWriteStream("profile.png"));
```

> You can use `.csm` or `.canvasium` as custom extensions if you like, but `.txt` or `.html` work too.

---

## Integrating into a Server

Canvasium can be used in a REST API or CLI:

```ts
import express from "express";
import { render } from "canvasium";

const app = express();

app.get("/rank", async (req, res) => {
  const ctx = await render(`
    <body width="300" height="100" background="#333">
      <text x="20" y="40" color="#fff">User: ${req.query.username}</text>
    </body>
  `);

  res.set("Content-Type", "image/png");
  ctx.canvas.createPNGStream().pipe(res);
});

app.listen(3000, () => console.log("Canvasium server running on port 3000"));
```

---

Canvasium is fully async and stream-friendly. You can render on-demand images in real-time servers or scheduled jobs.
