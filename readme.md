## Introduction

Quickly style react-native (and reactjs) components via props.



This library is the next version of [react-quick-style-components](https://github.com/lequanghuylc/react-quick-style-components). Multiple instances, better type support and split into multiple packages to give you more control of your components.

## Why does it exist

`react-quick-style-components` is all about quickly style via props. But it's quite hard and not convenient to achieve something like this:

```jsx
  <Text h1>Hello, World!</Text>
```

The tricky part is `h1` prop needs to be responsive, meaning it will render different font sizes based on screen sizes. It's kinda like `Typography` component of `Material Design`.

```jsx
  <Typography variant="h1">
    h1. Heading
  </Typography>
```

Of course we can use `onResponsiveStyle` but it's not really convenient. With props being responsing, it will be easier for us in order to build a design system.

## Installation

```
yarn add quickly-react
```

Reactjs

```
yarn add react-native-web quickly-react
```

## Test Playground

Want to test and debug your prop configurations? Check out the **[Test Playground](./playground.html)** - a browser-based tool that lets you:
- Write your prop configurations in JSON
- Input component props
- See computed props and styles in real-time

Simply open `playground.html` in your browser or [read the playground guide](./PLAYGROUND.md) for more details.

## Main idea & usage

Controlling props is the main idea.

For example:

```tsx
import { QuickComponent, IStyleProps } from 'quickly-react';
import { Text as RNText, TextProps } from 'react-native';

const qC = new QuickComponent();
qC.addProps('bold', {
  style: {
    fontWeight: 'bold',
  },
})
qC.addProps('h1', {
  props: {
    bold: true,
  },
  rStyle: {
    md: {
      fontSize: 30,
    },
    xs: {
      fontSize: 24,
    }
  },
})
const body = qC.addProps('body', {
  rStyle: {
    md: {
      fontSize: 16,
    },
    xs: {
      fontSize: 14,
    }
  },
})
const colorMain = qC.addProps('colorMain', {
  theme: {
    light: {
      color: 'black',
    },
    dark: {
      color: 'white',
    }
  }
})
qC.setupDefaultProps([bodyText, colorMain], {
  shouldDetectStyleProps: true,
});
interface ITextProps extends TextProps, IStyleProps {
  bold?: boolean;
  body?: boolean;
  h1?: boolean;
}
const Text : React.FC<ITextProps> = qC.make(RNText);
```

- In the example above, `h1` prop will render into `bold` props, and custom responsive style.

- The `Text` component will have default props `colorMain` and `bodyText`. 

- `colorMain` are used with `theme` color, it supports multiple themes

- `shouldDetectStyleProps: true` will accept quick style prop. so we can do something like: 

```jsx
  <Text h1 marginTop={20} textAlign="center">Hello, World!</Text>
```

## addProps API


- The first paramater is the name of the props. But remember to define it in type. For example:

```tsx
qC.addProps('bold', {
  style: {
    fontWeight: 'bold',
  },
})
interface ITextProps extends TextProps, IStyleProps {
  bold?: boolean;
  body?: boolean;
  h1?: boolean;
}
```

- The second parameter will accept an object of `IAddProps`:

```tsx
export interface IAddProps {
  theme?: {
    [nameOfTheme: string]: {
      [colorStyle: string]: string;
    };
  };
  style?: TStyle;
  rStyle?: {
    [breakpoint: string]: TStyle;
  };
  props?: any;
}
```

- `theme` is for theme specific styling
- `style` is for raw style object
- `rStyle` is responsive style, `{ xs, sm, md, lg, xl, xxl, xxxl }`
- `props` is for including other props. just like `h1` including `bold`. 

## Grid Component — Responsive Layouts

The `Grid` component provides a powerful way to create responsive layouts. Use breakpoint props (`xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xxxl`) with either **percentage widths** for equal columns or **flex ratios** for stack layouts.

### Percentage-Based Grid (Equal Columns)

Use percentages when you want all items to have equal width:

```tsx
// 1 per row (xs) → 2 per row (sm) → 3 per row (md) → 4 per row (lg)
<Grid xs="100%" sm="50%" md="33%" lg="25%" margin={-4}>
  {Array.from({ length: 12 }, (_, i) => (
    <Col key={i} margin={4} p3 round1 bgSecondary middle>
      <Text center small>{i + 1}</Text>
    </Col>
  ))}
</Grid>
```

**How spacing works:**
- Use negative `margin` on `Grid` (e.g., `margin={-4}`)
- Use positive `margin` on each child item (e.g., `margin={4}`)
- Total spacing between items = 8 (4 + 4)

**Breakpoint behavior:**
- `xs="100%"` → 1 column per row (mobile)
- `sm="50%"` → 2 columns per row (small tablets)
- `md="33%"` → 3 columns per row (tablets)
- `lg="25%"` → 4 columns per row (desktop)

### Flex Ratios (Stack Layout)

Use flex ratios (`1:2`, `1:3`, etc.) when items should have different proportions:

```tsx
// Vertical on mobile, horizontal with different proportions on larger screens
<Grid xs="100%" md="1:2" lg="1:3">
  <Col p3 round1 bgPrimary middle>
    <Text center small>Profile Picture</Text>
  </Col>
  <Col p3 round1 bgSecondary middle>
    <Text center small>Name & Details</Text>
  </Col>
</Grid>
```

**Breakpoint behavior:**
- `xs="100%"` → Vertical stack (both items full width)
- `md="1:2"` → Horizontal: first item 1/3 width, second item 2/3 width
- `lg="1:3"` → Horizontal: first item 1/4 width, second item 3/4 width

### Special Flex Patterns

- `xs="1"` → Only first child visible (flex:1), others hidden (flex:0)
- `sm="1:1"` → Only first two children visible (both flex:1), others hidden
- `xs="1:."` → All children get flex:1 (equal flex distribution)

### `any` in flex ratio strings

In a ratio rule like `md="1:any"`, each segment maps to one child (in order). Numeric segments set `flex` to that number. The keyword **`any`** means “no numeric flex”: that column does not get a `flex` value from the grid rule, so it sizes from its content or from props you pass on the child (for example a fixed `width` on `Col`).

```tsx
<Grid gap={24} xs="100%" md="1:any">
  <Col><Text>Flexible column</Text></Col>
  <Col width={320}><Text>Fixed 320pt width</Text></Col>
</Grid>
```

On `md` and up, the first column grows/shrinks with available space; the second stays driven by `width={320}` (and gap).

### SSR / Next.js: `initial` breakpoint on `Grid`

Responsive breakpoint for **`Grid`** is controlled by the **`initial`** prop (a breakpoint name: `xs`, `sm`, `md`, …). Use it so the first server render matches what you intend for hydration (often the narrow layout), then the client re-measures the real viewport before paint.

This is **not** the same as the responsive-style **`initialBreakpoint`** pattern used inside `rStyle` / `useCombineStyle` (where a breakpoint entry can carry an `.initial` marker). On **`Grid`**, the prop name is **`initial`**.

```tsx
<Grid xs="100%" md="1:any" initial="md" gap={24}>
  <Col>...</Col>
  <Col width={320}>...</Col>
</Grid>
```

Pick `initial` to align the first paint with your SSR strategy (for example `initial="xs"` if the server has no real width and you default to mobile markup).

## Theme system (`ThemeProvider`, `useThemeContext`)

The library exports a small theme context so components built with **`QuickComponent`** (or anything that uses **`useCombineStyle`**) can resolve `theme` entries from `addProps` against the **active theme name**.

```tsx
import { ThemeProvider, useThemeContext } from 'quickly-react';
```

### `ThemeProvider`

Wrap your app (or a subtree). Optional prop **`initial`**: string **name of the active theme** (defaults to `'default'` in the context—use the same string as a key in your `theme` objects, e.g. `light` / `dark`). This is unrelated to the **`initial`** breakpoint prop on **`Grid`** (SSR), which is also a string but must be a breakpoint code like `md` or `xs`.

```tsx
<ThemeProvider initial="light">
  <App />
</ThemeProvider>
```

### `useThemeContext`

Returns a tuple **`[currentThemeName, setTheme]`**, same shape as `useState`:

- **`currentThemeName`**: string, e.g. `'light'` or `'dark'`.
- **`setTheme`**: update the active theme (re-renders consumers and restyles components that depend on `theme` in `addProps`).

```tsx
const [theme, setTheme] = useThemeContext();
// Toggle example
setTheme(theme === 'light' ? 'dark' : 'light');
```

### How it ties to `addProps`

In `addProps`, `theme` is an object whose keys are theme names and values are style objects merged when that theme is active:

```tsx
qC.addProps('colorMain', {
  theme: {
    light: { color: '#111' },
    dark: { color: '#eee' },
  },
});
```

With `<ThemeProvider initial="light">`, `colorMain` resolves the `light` entry. Changing theme with `setTheme('dark')` switches to the `dark` styles. Name your themes consistently across `ThemeProvider` / `setTheme` and every `theme: { ... }` block in your design system.

## How to build a design system with this lib

This lib only provide core functions, you will need to build up your component yourself. 

**📖 For a complete step-by-step guide, see [DESIGN_SYSTEM_GUIDE.md](./DESIGN_SYSTEM_GUIDE.md)**

The guide covers:
- Defining design tokens (colors, spacing, typography)
- Creating text props and view props
- Building base components with `createBase`
- Creating higher-level components
- Responsive layout patterns

For working examples, check out the folder: `examples`
