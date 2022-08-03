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


## How to build a design system with this lib

This lib only provide core functions, you will need to build up your component yourself. For example, check out the folder: `examples/base`
