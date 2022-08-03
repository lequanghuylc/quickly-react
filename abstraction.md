## Abstraction

```tsx
<Text h1 blue />

// equals
<Text
  bold
  fontSize={{
    md: 40,
    sm: 16,
  }}
  color={COLOR.BLUE}
/>
// equals
<Text
  fontFamily={FONT.BOLD}
  fontSize={{
    md: 40,
    sm: 16,
  }}
  color={COLOR.BLUE}
/>
```

```tsx

const qComponent = new QuickComponent();

const mainTextColor = qComponent.addProps('mainTextColor', {
  theme: {
    dark: {
      color: FONT.COLOR.WHITE,
    },
    light: {
      color: FONT.COLOR.BLACK,
    }
  },
});

const bold = qComponent.addProps('bold', {
  style: {
    fontFamily: FONT.BOLD
  },
});

const sizeH1 = qComponent.addProps('sizeH1', {
  rStyle: {{
    md: 40,
    sm: 16,
  }}
});

const h1 = qComponent.addProps('h1', {
  props: {
    bold: true,
    fontSizeH1: true,
  }
});

const body = qComponent.addProps('body', {
  props: {
    fontRegular: true,
  }
});

qComponent.setupDefaultProps([fontRegular, body]);

const Text = qComponent.make(ReactNative.Text);

```