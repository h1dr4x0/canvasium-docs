# Custom Components (Not available for public yet)

Canvasium allows you to create your own rendering components by defining a function that receives the rendering context and draws on the canvas.

---

## Basic Structure

A custom component is just a function:

```ts
import type { CanvasComponent } from "canvasium";

export const MyComponent: CanvasComponent = ({
  ctx,
  node,
  offsetX,
  offsetY,
}) => {
  // Do your canvas drawing here
  const x = Number(node.attributes?.x ?? 0) + offsetX;
  const y = Number(node.attributes?.y ?? 0) + offsetY;

  ctx.fillStyle = node.attributes?.color ?? "#ff0000";
  ctx.fillRect(x, y, 100, 50);
};
```

---

## Registering the Component

In your `components/index.ts` or similar file:

```ts
import { MyComponent } from "./my-component";

export const components = {
  mycomponent: MyComponent,
  // ...existing components
};
```

Then in markup:

```xml
<mycomponent x="100" y="50" color="#00baff" />
```

---

## Component Context

Each custom component receives:

| Field                 | Description                                     |
| --------------------- | ----------------------------------------------- |
| `ctx`                 | Canvas 2D rendering context                     |
| `node`                | Parsed node with tag name, attributes, children |
| `data`                | Bound data object (if any)                      |
| `offsetX` / `offsetY` | Positional offset from parent                   |
| `parent`              | (Optional) Parent node                          |
| `render()`            | Helper function to render child nodes           |

---

## Nesting and Composition

You can render child nodes inside your custom component:

```ts
node.children?.forEach((child) =>
  render(child, {
    offsetX: x,
    offsetY: y,
  })
);
```

This allows full nesting, like:

```xml
<mycomponent x="0" y="0">
  <text x="20" y="20">Inside!</text>
</mycomponent>
```

---

## Tips

- Keep logic isolated per component
- Use `node.attributes` to extract options
- You can even add your own custom attributes

---

Custom components let you fully extend Canvasium to fit your domain — from dynamic charts to styled layouts, you're in full control.
