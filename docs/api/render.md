# `render()` Function

The `render()` function is the main way to turn your markup into a canvas rendering context.

```ts
import { render } from "canvasium";

const ctx = await render(markup, data);
```

---

## Parameters

| Name     | Type                  | Description                               |
| -------- | --------------------- | ----------------------------------------- |
| `markup` | `string`              | Markup string written in Canvasium syntax |
| `data`   | `Record<string, any>` | (Optional) Data object for interpolation  |

---

## Returns

The function returns a `CanvasRenderingContext2D` object from the [canvas](https://www.npmjs.com/package/canvas) package. You can use this to:

- Export a PNG or JPEG
- Apply filters or styles
- Access the raw canvas for further drawing

---

## Example

```ts
const markup = `
  <body width="300" height="100" background="#fff">
    <text x="20" y="50" font="20px sans-serif" color="#000">
      Hello, {username}!
    </text>
  </body>
`;

const ctx = await render(markup, { username: "h1dr4x" });

ctx.canvas.createPNGStream().pipe(fs.createWriteStream("hello.png"));
```

---

## Errors

- If no `<body>` tag is found, an error is thrown.
- If `width` or `height` is missing on `<body>`, an error is thrown.

---

## Notes

- The rendering is async.
- You must use `await render(...)` or `.then(...)`.
- This function is used internally by `renderFile()` as well.
