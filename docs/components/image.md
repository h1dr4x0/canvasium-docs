# `<image>` Component

The `<image>` component renders an image from a URL onto the canvas. Supports positioning, scaling, alignment, and optional circular clipping.

---

## Basic Usage

```xml
<image
  x="50"
  y="50"
  width="100"
  height="100"
  src="https://example.com/avatar.png"
/>
```

---

## Attributes

| Name                 | Type               | Description                                                       |
| -------------------- | ------------------ | ----------------------------------------------------------------- |
| `src`                | string             | The URL of the image (required)                                   |
| `x`, `y`             | number             | Position of the top-left corner of the image                      |
| `width`              | number             | Width of the image in pixels                                      |
| `height`             | number             | Height of the image in pixels                                     |
| `rounded`            | boolean (`"true"`) | (Optional) Clips the image into a circle                          |
| `radius`             | number             | (Optional) Uniform corner radius (rounded rectangle)              |
| `radiusTopLeft`      | number             | (Optional) Top-left corner radius override                        |
| `radiusTopRight`     | number             | (Optional) Top-right corner radius override                       |
| `radiusBottomLeft`   | number             | (Optional) Bottom-left corner radius override                     |
| `radiusBottomRight`  | number             | (Optional) Bottom-right corner radius override                    |
| `horizontalAlign`    | string             | (Optional) `left`, `center`, `right` — aligns image inside parent |
| `verticalAlign`      | string             | (Optional) `top`, `center`, `bottom` — aligns image inside parent |
| `zIndex`             | number             | (Optional) Layer order. Lower draws first; ties favor earlier markup |

---

## Example

```xml
<card x="0" y="0" width="300" height="150" color="#141414">
  <image
    x="20"
    y="20"
    width="64"
    height="64"
    src="https://cdn.discordapp.com/avatars/123456789/avatar.png"
    rounded="true"
  />
</card>
```

---

## Notes

- You can use image placeholders with dynamic values:

```xml
<image src="{avatar}" width="64" height="64" x="0" y="0" />
```

- If the image fails to load or the URL is invalid, nothing will be drawn.
- Rounded images are clipped as circles from center based on `width` & `height`.
- Corner radii (`radius*`) clip to a rounded rectangle if `rounded` is not set.
- Rendering order respects `zIndex`; with equal `zIndex`, earlier markup appears on top.

> ⚠️ Images must be hosted with public access. Some CDNs (e.g. Discord) may block non-browser requests — use an image proxy if needed.
