# `renderFile()` Function

The `renderFile()` function reads a markup file from disk, applies data binding, and returns a canvas context just like `render()`.

---

## Usage

```ts
import { renderFile } from "canvasium";

const ctx = await renderFile("./templates/card.csm", {
  username: "h1dr4x",
  level: 45,
});
```

---

## Parameters

| Name   | Type                  | Description                                  |
| ------ | --------------------- | -------------------------------------------- |
| `path` | `string`              | Path to the file containing Canvasium markup |
| `data` | `Record<string, any>` | (Optional) Data to interpolate               |

---

## Returns

A `CanvasRenderingContext2D` object from [node-canvas](https://www.npmjs.com/package/canvas).

You can use this to:

- Export PNG
- Further modify the canvas
- Chain additional rendering logic

---

## Example

```ts
const ctx = await renderFile("profile.csm", {
  name: "CanvasBoy",
  level: 99,
  avatar: "https://cdn.site.com/avatar.png",
});

ctx.canvas.createPNGStream().pipe(fs.createWriteStream("output.png"));
```

---

## Notes

- `renderFile()` uses `fs.promises.readFile()` under the hood
- You can use `.csm`, `.canvasium`, `.txt`, `.html` or any file extension
- The rendering is fully async

> Ideal for templated images where content lives in external files
