# Component Context API

Every Canvasium component (built-in or custom) receives a standardized rendering context object.

This object allows the component to:

- Draw on the canvas
- Access its position and parent
- Render children
- Use bound data

---

## Structure

```ts
export interface RenderContext {
  ctx: CanvasRenderingContext2D;
  node: Node;
  data?: Record<string, any>;
  offsetX?: number;
  offsetY?: number;
  parent?: Node;
  render: (node: Node, opts?: { offsetX?: number; offsetY?: number }) => void;
}
```

---

## Fields

| Name                 | Type                     | Description                                                    |
| -------------------- | ------------------------ | -------------------------------------------------------------- |
| `ctx`                | CanvasRenderingContext2D | The actual 2D context from node-canvas                         |
| `node`               | Node                     | The parsed node with type, value, attributes, and children     |
| `data`               | object                   | (Optional) Data object passed to `render()` or `renderFile()`  |
| `offsetX`, `offsetY` | number                   | Position inherited from the parent container                   |
| `parent`             | Node                     | (Optional) Parent node (e.g. for alignment or size)            |
| `render`             | function                 | Helper to render child nodes (calls `renderNode()` internally) |

---

## Example

```ts
export const MyComponent: CanvasComponent = ({
  ctx,
  node,
  offsetX,
  offsetY,
}) => {
  const x = Number(node.attributes?.x ?? 0) + offsetX;
  const y = Number(node.attributes?.y ?? 0) + offsetY;

  ctx.fillStyle = node.attributes?.color ?? "#f00";
  ctx.fillRect(x, y, 100, 50);
};
```

---

## `render(child, opts)` Example

You can render nested children with:

```ts
node.children?.forEach((child) => render(child, { offsetX: x, offsetY: y }));
```

This makes sure child nodes are drawn relative to their container.

---

## Tips

- Always handle `offsetX` and `offsetY` correctly for relative positioning
- Use `parent` to access container size or attributes (e.g. for center alignment)
- You can add extra fields in context if your system allows plugin extensions

---

Canvasium's component context gives you full power to control layout, nesting, styling, and rendering flow.
