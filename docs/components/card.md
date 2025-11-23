# `<card>` Component

The `<card>` component is a container that draws a filled rounded rectangle. It's commonly used as a layout block, section wrapper, or background for other elements like text and images.

---

## Basic Usage

```xml
<card
  x="50"
  y="50"
  width="300"
  height="150"
  color="#1e1e1e"
/>
```

---

## Attributes

| Name                | Type   | Description                                                    |
| ------------------- | ------ | -------------------------------------------------------------- |
| `x`, `y`            | number | Position of the card                                           |
| `width`             | number | Width of the card                                              |
| `height`            | number | Height of the card                                             |
| `color`             | string | Fill color of the card                                         |
| `borderWidth`       | number | (Optional) Border width in pixels                              |
| `borderColor`       | string | (Optional) Border color                                        |
| `radius`            | number | (Optional) Uniform corner radius                               |
| `radiusTopLeft`     | number | (Optional) Top-left corner radius override                     |
| `radiusTopRight`    | number | (Optional) Top-right corner radius override                    |
| `radiusBottomLeft`  | number | (Optional) Bottom-left corner radius override                  |
| `radiusBottomRight` | number | (Optional) Bottom-right corner radius override                 |
| `zIndex`            | number | (Optional) Layer order. Lower draws first; ties favor earlier markup |
| `horizontalAlign`   | string | (Optional) `left`, `center`, or `right` — aligns within parent |
| `verticalAlign`     | string | (Optional) `top`, `center`, or `bottom` — aligns within parent |

---

## Example

```xml
<card
  x="0"
  y="0"
  width="300"
  height="150"
  color="#292929"
  radius="12"
  borderWidth="2"
  borderColor="#4f8cff"
>
  <text x="20" y="20" color="#fff" font="20px sans-serif">Hello Card</text>
</card>
```

---

## Nesting

You can place child components inside `<card>` — they will be positioned relative to the card's `x` and `y`.

> ℹ️ Rendering order: lower `zIndex` draws first; higher draws on top. If `zIndex` is the same or missing, earlier markup renders on top.

---

## Tips

- Combine cards with `<text>` and `<image>` to build profile panels
