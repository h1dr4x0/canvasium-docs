# Data Binding

Canvasium allows you to inject dynamic values into your markup using a simple templating system. This makes it easy to create reusable layouts populated with live data.

---

## Basic Syntax

Use curly braces `{}` to insert values:

```xml
<text x="20" y="40" font="20px sans-serif" color="#fff">
  Level: {level}
</text>
```

Then call the renderer with a data object:

```ts
await render(markup, { level: 42 });
```

Result:

```
Level: 42
```

---

## Interpolation in Attributes

You can also bind data inside attributes:

```xml
<image
  x="20"
  y="20"
  width="64"
  height="64"
  src="{avatarUrl}"
  rounded="true"
/>
```

```ts
await render(markup, {
  avatarUrl: "https://example.com/avatar.png",
});
```

---

## Supported Fields

- Works in both **attributes** and **text content**
- Supports strings, numbers, booleans
- `null` or `undefined` will render as empty

---

## Escaping

If you want to render literal curly braces, use double braces:

```xml
<text>{\{username\}}</text>
```

Result:

```
{username}
```

---

Canvasium's data binding is simple and fast — perfect for injecting live content into templates or automated image generation.
