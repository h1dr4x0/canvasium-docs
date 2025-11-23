# Metric Tiles

A pair of metric cards combining text, bars, and imagery with rounded corners.

---

## 📸 Output Preview

![Metric Tiles](https://raw.githubusercontent.com/h1dr4x0/canvasium-docs/refs/heads/main/public/metric_tiles.png)

---

## 🧩 Markup

```xml
<body width="520" height="200" background="#0f172a" radius="16">
  <card x="16" y="16" width="240" height="168" color="#151e30ff" radius="12">
    <text x="16" y="16" font="16px 'Poppins', sans-serif" color="#cbd5e1">Downloads</text>
    <text x="16" y="44" font="28px 'Poppins', sans-serif" color="#e5e7eb">18,240</text>
    <bar x="16" y="88" width="208" height="12" value="84" max="100" color="#3b82f6" background="#1f2937" outerRadius="6" innerRadius="6" safeWidth="true" minDrawWidth="6" />
    <text x="16" y="108" font="13px 'Poppins', sans-serif" color="#94a3b8">Goal 22,000</text>
  </card>
  <card x="264" y="16" width="240" height="168" color="#151e30ff" radius="12">
    <image src="https://images.unsplash.com/photo-1502764613149-7f1d229e230f?w=400" width="240" height="120" radiusTopLeft="12" radiusTopRight="12" />
    <text x="16" y="136" font="16px 'Poppins', sans-serif" color="#e5e7eb">New collection</text>
  </card>
</body>
```

---

## 🔗 Related Topics

- [Bar Component](/components/bar)
- [Image Component](/components/image)
- [Safe Width](/components/bar#tips)
