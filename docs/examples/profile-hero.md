# Profile Hero Card

A layered profile card showcasing image + badge + stats with z-index ordering and nested cards.

---

## 📸 Output Preview

![Profile Hero](https://raw.githubusercontent.com/h1dr4x0/canvasium-docs/refs/heads/main/public/profile_hero.png)

---

## 🧩 Markup

```xml
<body width="420" height="220" background="#0b1221" radius="18">
  <card x="16" y="16" width="388" height="188" color="#111827" radius="14">
    <image src="https://i.pravatar.cc/120?img=47" x="22" y="24" width="88" height="88" rounded="true" zIndex="2" />
    <card x="16" y="20" width="356" height="100" color="#0f172a" radius="12" zIndex="0">
      <text x="110" y="14" font="20px 'Poppins', sans-serif" color="#e5e7eb">Alice Lee</text>
      <text x="110" y="42" font="14px 'Poppins', sans-serif" color="#9ca3af">Lead Frontend Engineer</text>
      <bar x="110" y="64" width="220" height="10" value="78" max="100" color="#22c55e" background="#1f2937" outerRadius="6" innerRadius="6" />
    </card>
    <card x="12" y="12" width="72" height="28" color="#22c55e" radius="8" zIndex="3">
      <text x="12" y="6" font="14px 'Poppins', sans-serif" color="#0b1221">Online</text>
    </card>
  </card>
</body>
```

---

## 🔗 Related Topics

- [Image Component](/components/image)
- [Card Component](/components/card)
- [Z-Index & Order](/components/card#nesting)
