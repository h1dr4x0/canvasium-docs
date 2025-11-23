# Asymmetric Corners

Demonstrates per-corner radii on body, card, bar, and image to create an asymmetric aesthetic.

---

## 📸 Output Preview

![Asymmetric Corners](https://raw.githubusercontent.com/h1dr4x0/canvasium-docs/refs/heads/main/public/asymmetric.png)

---

## 🧩 Markup

```xml
<body width="380" height="220" background="#0b1221" radiusTopLeft="16" radiusBottomRight="16">
  <card x="16" y="16" width="348" height="188" color="#111827" radiusTopLeft="14" radiusBottomRight="14">
    <image
      src="https://i.pravatar.cc/140?img=32"
      x="18"
      y="18"
      width="120"
      height="120"
      radiusTopLeft="18"
      radiusBottomRight="18"
    />
    <bar
      x="154"
      y="28"
      width="180"
      height="14"
      value="45"
      max="100"
      color="#22c55e"
      background="#1f2937"
      outerRadiusTopLeft="10"
      outerRadiusBottomRight="10"
      innerRadiusTopLeft="10"
      innerRadiusBottomRight="10"
    />
  </card>
</body>
```

---

## 🔗 Related Topics

- [Per-corner Radii](/components/card#attributes)
- [Image Corners](/components/image#attributes)
- [Bar Corners](/components/bar#attributes)
