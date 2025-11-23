# `<bar>` Component

The `<bar>` component renders a progress bar with customizable colors, rounded corners, and value bindings. Ideal for visualizing levels, health, XP, and more.

---

## Basic Usage

```xml
<bar
  x="50"
  y="100"
  width="200"
  height="20"
  value="40"
  max="100"
  color="#00baff"
  background="#333"
/>
```

---

## Attributes

| Name                    | Type               | Description                                              |
| ----------------------- | ------------------ | -------------------------------------------------------- |
| `x`, `y`                | number             | Position of the top-left corner                          |
| `width`                 | number             | Total width of the bar                                   |
| `height`                | number             | Total height of the bar                                  |
| `value`                 | number             | Current progress (numerator)                             |
| `max`                   | number             | Max progress (denominator)                               |
| `color`                 | string             | Fill color for the progress portion                      |
| `background`            | string             | Background color of the full bar                         |
| `outerRadius`           | number             | (Optional) Uniform corner radius for the full bar        |
| `outerRadiusTopLeft`    | number             | (Optional) TL corner radius for full bar                 |
| `outerRadiusTopRight`   | number             | (Optional) TR corner radius for full bar                 |
| `outerRadiusBottomLeft` | number             | (Optional) BL corner radius for full bar                 |
| `outerRadiusBottomRight`| number             | (Optional) BR corner radius for full bar                 |
| `innerRadius`           | number             | (Optional) Uniform corner radius for the filled bar      |
| `innerRadiusTopLeft`    | number             | (Optional) TL corner radius for filled bar               |
| `innerRadiusTopRight`   | number             | (Optional) TR corner radius for filled bar               |
| `innerRadiusBottomLeft` | number             | (Optional) BL corner radius for filled bar               |
| `innerRadiusBottomRight`| number             | (Optional) BR corner radius for filled bar               |
| `zIndex`                | number             | (Optional) Layer order. Lower draws first; ties favor earlier markup |
| `minDrawWidth`          | number             | (Optional) Minimum width to render when value > 0        |
| `safeWidth`             | boolean (`"true"`) | (Optional) If true, `minDrawWidth` will be applied       |

---

## Example

```xml
<bar
  x="100"
  y="120"
  width="150"
  height="12"
  value="{level}"
  max="100"
  color="#4f8cff"
  background="#1e1e1e"
  outerRadius="8"
  innerRadius="8"
  minDrawWidth="4"
  safeWidth="true"
/>
```

---

## Tips

- Always set both `value` and `max` to avoid division-by-zero errors.
- Use `safeWidth="true"` + `minDrawWidth` to prevent bars from disappearing at low values.
- Combine per-corner radii with `zIndex` to layer bars under labels or badges.

---

## Notes

- Bar position is relative to its parent container.
- Corner radius can be different for the inner and outer parts.
