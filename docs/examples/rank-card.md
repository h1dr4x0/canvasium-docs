# Rank Card Example

This example demonstrates a Discord-style rank card using multiple components like `<card>`, `<text>`, `<bar>`, and `<image>`.

---

## 📸 Output Preview

![Output](https://raw.githubusercontent.com/h1dr4x0/canvasium-docs/refs/heads/main/public/rank-card-preview.png)

---

## 🧩 Markup

```xml
<body width="540" height="174" background="#fff" radius="10">
  <card
    x="0"
    y="0"
    width="144"
    height="174"
    color="#141414"
    radiusTopLeft="7"
    radiusBottomLeft="7"
    borderWidth="1"
    borderColor="#222"
  ></card>

  <image
    x="9"
    y="20"
    width="128"
    height="128"
    src="{avatar}"
    rounded="true"
  ></image>

  <text
    x="199"
    y="35"
    font="30px Poppins-Light"
    color="#000"
  >Level</text>

  <text
    x="400"
    y="35"
    font="30px Poppins-Light"
    color="#000"
  >{level}</text>

  <bar
    x="200"
    y="80"
    width="220"
    height="8"
    value="{currentXp}"
    max="{maxXp}"
    color="#0293c9"
    background="#e3e3e3"
    outerRadius="4"
    innerRadius="4"
    safeWidth="true"
    minDrawWidth="4"
  ></bar>

  <text
    x="200"
    y="100"
    font="20px Poppins-Light"
    color="#000"
  >{currentXp}/{maxXp}</text>
</body>
```

---

## 🧠 Data Example

```ts
{
  avatar: "https://cdn.discordapp.com/avatars/1075050158389203058/e3e88054cc6e80a3b857f21993d3f068.png",
  level: 5,
  currentXp: 50,
  maxXp: 100
}
```

---

## 🔗 Related Topics

- [Bar Component](/components/bar)
- [Data Binding](/advanced/data-binding)
- [Custom Fonts](/guide/installation)
