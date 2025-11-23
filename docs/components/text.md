# `<text>` Component

The `<text>` component renders plain text on the canvas with full control over font, size, color, and position.

---

## Basic Usage

```xml
<text
  x="100"
  y="50"
  font="24px sans-serif"
  color="#ffffff"
>
  Hello, Canvasium!
</text>
```

---

## Attributes

| Name              | Type   | Description                                                      |
| ----------------- | ------ | ---------------------------------------------------------------- |
| `x`, `y`          | number | Position of the text relative to its parent                      |
| `font`            | string | Font style (e.g. `"24px Poppins"` or `"16px sans-serif"`)        |
| `color`           | string | Text fill color (hex, rgb, or named CSS color)                   |
| `shadowColor`     | string | (Optional) Text shadow color                                     |
| `shadowBlur`      | number | (Optional) Shadow blur radius                                    |
| `opacity`         | number | (Optional) 0–1 float opacity                                     |
| `horizontalAlign` | string | (Optional) `left`, `center`, `right` — aligns text inside parent |
| `verticalAlign`   | string | (Optional) `top`, `center`, `bottom` — aligns text inside parent |
| `maxWidth`        | number | (Optional) Limits text width, useful for wrapping or truncation  |
| `zIndex`          | number | (Optional) Layer order. Lower draws first; ties favor earlier markup |

---

## Interpolation

The text value supports dynamic variables using curly braces:

```xml
<text x="20" y="40" font="18px sans-serif" color="#fff">
  Level: {level}
</text>
```

> When using `render(markup, { level: 5 })`, the text will appear as `Level: 5`.

---

## Example

```xml
<card x="0" y="0" width="300" height="100" color="#222">
  <text
    x="20"
    y="30"
    font="24px Poppins"
    color="#4f8cff"
    shadowColor="#000"
    shadowBlur="2"
  >
    Hello, Alex!
  </text>
</card>
```

---

## Notes

- Fonts must be registered via `registerFont()` to be used (e.g. Poppins).
- Positioning is relative to the parent container (e.g. `<card>` or `<body>`).
- Rendering order respects `zIndex`; with equal `zIndex`, earlier markup appears on top.
