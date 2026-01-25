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
