# Building a Design System with quickly-react

This guide walks you through creating a complete design system using the `quickly-react` library. We'll build reusable components that can be styled via props, with responsive behavior and theme support.

## Table of Contents

1. [Overview](#overview)
2. [Step 1: Define Design Tokens](#step-1-define-design-tokens)
3. [Step 2: Create Text Props](#step-2-create-text-props)
4. [Step 3: Create View Props](#step-3-create-view-props)
5. [Step 4: Create Base Components](#step-4-create-base-components)
6. [Step 5: Build Components from Base](#step-5-build-components-from-base)
7. [Responsive Layout Patterns](#responsive-layout-patterns)
8. [Best Practices](#best-practices)

---

## Overview

The `quickly-react` library enables you to build components that accept style props directly, making your API intuitive and powerful:

```tsx
<Text h1 bold marginTop={20} textAlign="center">
  Hello, World!
</Text>

<Col flex1 p4 round2 bgWhite shadow>
  <Text h3>Card Title</Text>
</Col>
```

To achieve this, you need to:
1. Define your design tokens (colors, spacing, typography)
2. Create prop definitions for text and view components
3. Use `createBase` to generate your base components
4. Build higher-level components using the base components

---

## Step 1: Define Design Tokens

Design tokens are the foundation of your design system. They define colors, spacing units, typography scales, and other design constants.

### 1.1 Create a Tokens File

Create `components/base/tokens.ts`:

```tsx
// Design tokens - colors, spacing, typography

export const COLOR = {
  // Primary colors
  PRIMARY_500: '#1955A6',
  PRIMARY_400: '#1955A6CC',
  PRIMARY_300: '#1955A699',
  PRIMARY_200: '#1955A666',
  PRIMARY_100: '#1955A633',

  // Semantic colors
  SUCCESS: '#12D18E',
  WARNING: '#FACC15',
  ERROR: '#F75555',
  INFO: '#1955A6',

  // Grayscale
  GREYSCALE_900: '#212121',
  GREYSCALE_800: '#424242',
  GREYSCALE_700: '#616161',
  GREYSCALE_600: '#757575',
  GREYSCALE_500: '#9E9E9E',
  GREYSCALE_400: '#BDBDBD',
  GREYSCALE_300: '#E0E0E0',
  GREYSCALE_200: '#EEEEEE',
  GREYSCALE_100: '#F5F5F5',
  GREYSCALE_50: '#FAFAFA',

  // Base colors
  WHITE: '#FFFFFF',
  BLACK: '#000000',
};

// Spacing unit (used for margin/padding calculations)
export const SPACING_UNIT = 8;

// Typography scale
export const TYPOGRAPHY = {
  h1: { fontSize: 48, lineHeight: 48 * 1.4 },
  h2: { fontSize: 40, lineHeight: 40 * 1.4 },
  h3: { fontSize: 32, lineHeight: 32 * 1.4 },
  h4: { fontSize: 24, lineHeight: 24 * 1.4 },
  h5: { fontSize: 20, lineHeight: 20 * 1.4 },
  h6: { fontSize: 18, lineHeight: 18 * 1.4 },
  body: { fontSize: 16, lineHeight: 16 * 1.4 },
  small: { fontSize: 14, lineHeight: 14 * 1.4 },
  xsmall: { fontSize: 12, lineHeight: 12 * 1.4 },
};
```

**Key Points:**
- Use semantic naming (PRIMARY_500, SUCCESS, etc.)
- Define a spacing unit for consistent margins/padding
- Create typography scale with line heights
- Export tokens for use in prop definitions

---

## Step 2: Create Text Props

Text props define typography variants, font weights, and text-specific styles that can be applied via props.

### 2.1 Create `components/base/textProps.ts`

```tsx
import { Platform } from 'react-native';
import { COLOR, TYPOGRAPHY } from './tokens';

// Font configuration (adjust for your fonts)
const FONT_WEB = '"Inter", sans-serif';
export const FONT = {
  Font_400Regular: Platform.OS === 'web' ? FONT_WEB : 'Inter_400Regular',
  Font_500Medium: Platform.OS === 'web' ? FONT_WEB : 'Inter_500Medium',
  Font_600SemiBold: Platform.OS === 'web' ? FONT_WEB : 'Inter_600SemiBold',
  Font_700Bold: Platform.OS === 'web' ? FONT_WEB : 'Inter_700Bold',
};

// Prop parameter type
type TPropParam = {
  propName: string;
  obj: any;
  isDefault?: boolean;
};

export const textProps: Array<TPropParam> = [
  // Font weights
  {
    propName: 'bold',
    obj: {
      style: {
        fontWeight: 'bold',
        fontFamily: FONT.Font_700Bold,
      },
    },
  },
  {
    propName: 'semiBold',
    obj: {
      style: {
        fontWeight: '600',
        fontFamily: FONT.Font_600SemiBold,
      },
    },
  },
  {
    propName: 'medium',
    obj: {
      style: {
        fontWeight: '500',
        fontFamily: FONT.Font_500Medium,
      },
    },
  },
  {
    propName: 'regular',
    obj: {
      style: {
        fontWeight: '400',
        fontFamily: FONT.Font_400Regular,
      },
    },
    isDefault: true, // Applied by default to all Text components
  },

  // Text alignment
  {
    propName: 'center',
    obj: {
      style: {
        textAlign: 'center',
      },
    },
  },

  // Typography scale
  {
    propName: 'h1',
    obj: {
      style: TYPOGRAPHY.h1,
    },
  },
  {
    propName: 'h2',
    obj: {
      style: TYPOGRAPHY.h2,
    },
  },
  {
    propName: 'h3',
    obj: {
      style: TYPOGRAPHY.h3,
    },
  },
  {
    propName: 'h4',
    obj: {
      style: TYPOGRAPHY.h4,
    },
  },
  {
    propName: 'h5',
    obj: {
      style: TYPOGRAPHY.h5,
    },
  },
  {
    propName: 'h6',
    obj: {
      style: TYPOGRAPHY.h6,
    },
  },
  {
    propName: 'body',
    obj: {
      style: TYPOGRAPHY.body,
    },
    isDefault: true,
  },
  {
    propName: 'small',
    obj: {
      style: TYPOGRAPHY.small,
    },
  },
  {
    propName: 'xsmall',
    obj: {
      style: TYPOGRAPHY.xsmall,
    },
  },

  // Theme-aware colors
  {
    propName: 'colorDefault',
    obj: {
      theme: {
        dark: {
          color: COLOR.WHITE,
        },
        light: {
          color: COLOR.BLACK,
        },
      },
    },
    isDefault: true,
  },
];

// TypeScript interface for Text component props
export interface ITextProps {
  // Font weights
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
  regular?: boolean;

  // Alignment
  center?: boolean;

  // Typography
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  body?: boolean;
  small?: boolean;
  xsmall?: boolean;
}
```

**Key Points:**
- Use `isDefault: true` for props that should be applied to all Text components
- Use `theme` for colors that change based on light/dark mode
- Use `style` for static styles
- Use `rStyle` for responsive styles (see responsive section)
- Define TypeScript interface matching your prop names

### 2.2 Responsive Text Props Example

To make typography responsive, use `rStyle`:

```tsx
{
  propName: 'h1',
  obj: {
    rStyle: {
      md: {
        fontSize: 48,
        lineHeight: 48 * 1.4,
      },
      xs: {
        fontSize: 32,
        lineHeight: 32 * 1.4,
      },
    },
  },
},
```

This makes `h1` render at 32px on mobile (xs) and 48px on desktop (md+).

---

## Step 3: Create View Props

View props define container-specific styles like background colors, borders, and layout utilities.

### 3.1 Create `components/base/viewProps.ts`

```tsx
import { COLOR } from './tokens';

type TPropParam = {
  propName: string;
  obj: any;
  isDefault?: boolean;
};

export const viewProps: Array<TPropParam> = [
  // Theme-aware backgrounds
  {
    propName: 'bgTheme',
    obj: {
      theme: {
        dark: {
          backgroundColor: COLOR.GREYSCALE_900,
        },
        light: {
          backgroundColor: COLOR.WHITE,
        },
      },
    },
  },
  {
    propName: 'bgThemeSecondary',
    obj: {
      theme: {
        dark: {
          backgroundColor: COLOR.GREYSCALE_800,
        },
        light: {
          backgroundColor: COLOR.GREYSCALE_100,
        },
      },
    },
  },

  // Color backgrounds
  {
    propName: 'bgPrimary',
    obj: {
      style: {
        backgroundColor: COLOR.PRIMARY_500,
      },
    },
  },
  {
    propName: 'bgSuccess',
    obj: {
      style: {
        backgroundColor: COLOR.SUCCESS,
      },
    },
  },
];

export interface IViewProps {
  bgTheme?: boolean;
  bgThemeSecondary?: boolean;
  bgPrimary?: boolean;
  bgSuccess?: boolean;
}
```

**Key Points:**
- View props are applied to `Col`, `Row`, and other container components
- Use `theme` for theme-aware styles
- Keep view props focused on container/layout concerns

---

## Step 4: Create Base Components

Base components (`Col`, `Row`, `Text`, `Grid`, `RatioCol`) are generated using `createBase` from `quickly-react`.

### 4.1 Create `components/base/index.tsx`

```tsx
import { createBase, IStyleProps, TCommonPropStyle } from 'quickly-react';
import * as RN from 'react-native';
import {
  ViewProps,
  PressableProps,
} from 'react-native';
import { textProps, type ITextProps } from './textProps';
import { viewProps, type IViewProps } from './viewProps';
import { COLOR, SPACING_UNIT } from './tokens';

// Define prop interfaces
export interface IColProps
  extends ViewProps,
    PressableProps,
    IStyleProps,
    TCommonPropStyle {
  style?: any;
  children?: any;
}

export interface IRowProps extends IColProps {}

export interface IGridProps extends IColProps {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
  xxxl?: string;
}

// Create base components
const BaseComponent = createBase<IColProps, IRowProps, ITextProps>({
  RN, // React Native module
  addTextProps: textProps,
  addViewProps: viewProps,
  commonStyles: {}, // Additional common styles (optional)
  tokens: {
    borderColor: COLOR.GREYSCALE_300,
    textColorPrimary: COLOR.BLACK,
    textColorSecondary: COLOR.GREYSCALE_600,
    textColorTertiary: COLOR.WHITE,
    bgColorPrimary: COLOR.WHITE,
    bgColorSecondary: COLOR.GREYSCALE_100,
    mainColor: COLOR.PRIMARY_500,
    unit: SPACING_UNIT, // Used for m1-m9, p1-p9 calculations
  },
});

// Export components
export const Col: React.FC<IColProps & IViewProps> = BaseComponent.Col;
export const Row: React.FC<IRowProps & IViewProps> = BaseComponent.Row;
export const Grid: React.FC<IGridProps & IViewProps> = BaseComponent.Grid;
export const Text: React.FC<ITextProps> = BaseComponent.Text;
export const RatioCol: React.FC<IRatioColProps & IViewProps> =
  BaseComponent.RatioCol;

// Export tokens
export * from './tokens';
```

**Key Points:**
- `createBase` generates `Col`, `Row`, `Text`, `Grid`, `RatioCol`
- `tokens.unit` is used to calculate `m1` (unit × 1), `p2` (unit × 2), etc.
- `IStyleProps` enables style props like `marginTop`, `flex`, `gap`, etc.
- `TCommonPropStyle` provides common props like `round1`, `shadow`, `middle`, etc.

### 4.2 Available Base Components

After creating base components, you get:

- **`Col`**: Vertical container (flexDirection: column)
- **`Row`**: Horizontal container (flexDirection: row, alignItems: center by default)
- **`Text`**: Text component with your typography props
- **`Grid`**: Responsive grid layout (see responsive section)
- **`RatioCol`**: Container with aspect ratio

### 4.3 Common Props Available

All base components support these common props (from `TCommonPropStyle`):

**Spacing:**
- `m0`-`m9`, `mt1`-`mt9`, `mb1`-`mb9`, `ml1`-`ml9`, `mr1`-`mr9`
- `mv1`-`mv9` (vertical), `mh1`-`mh9` (horizontal)
- `p0`-`p9`, `pt1`-`pt9`, `pb1`-`pb9`, `pl1`-`pl9`, `pr1`-`pr9`
- `pv1`-`pv9`, `ph1`-`ph9`

**Layout:**
- `flex1`, `flex2`, `flex3`, etc. (flex: 1, 2, 3...)
- `middle` (justifyContent: center, alignItems: center)
- `width100p` (width: '100%')

**Styling:**
- `round0`, `round1`, `round1_5`, `round2` (borderRadius: 4, 8, 12, 16)
- `shadow` (elevation + shadow)
- `bgWhite`, `bgPrimary`, `bgSecondary`
- `borderThin` (borderWidth: 1)

**Style Props (when `shouldDetectStyleProps: true`):**
- `marginTop={20}`, `padding={16}`, `gap={8}`, `flex={1}`, etc.

---

## Step 5: Build Components from Base

Now you can build higher-level components using your base components.

### 5.1 Example: Button Component

```tsx
import React from 'react';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({ title, onPress, variant = 'primary', disabled }: ButtonProps) {
  return (
    <Col
      onPress={disabled ? undefined : onPress}
      middle
      round1
      ph3
      pv2
      style={{
        backgroundColor: variant === 'primary' ? COLOR.PRIMARY_500 : COLOR.GREYSCALE_200,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Text
        bmedium
        style={{
          color: variant === 'primary' ? COLOR.WHITE : COLOR.GREYSCALE_900,
        }}
      >
        {title}
      </Text>
    </Col>
  );
}
```

### 5.2 Example: Card Component

```tsx
import React, { ReactNode } from 'react';
import { Col, Text } from '@/components/base';

export interface CardProps {
  title?: string;
  children: ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <Col p4 round2 bgWhite shadow gap={12}>
      {title ? <Text h4 bold>{title}</Text> : null}
      {children}
    </Col>
  );
}
```

### 5.3 Example: FormField Component

```tsx
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Col, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export interface FormFieldProps extends Omit<TextInputProps, 'style'> {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  error?: string;
}

export function FormField({ label, value, onChangeText, error, ...rest }: FormFieldProps) {
  return (
    <Col gap={4}>
      <Text small semiBold>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{
          borderWidth: 1,
          borderColor: error ? COLOR.ERROR : COLOR.GREYSCALE_300,
          borderRadius: 8,
          paddingHorizontal: 12,
          paddingVertical: 10,
          fontSize: 16,
        }}
        {...rest}
      />
      {error ? <Text xsmall style={{ color: COLOR.ERROR }}>{error}</Text> : null}
    </Col>
  );
}
```

**Key Points:**
- Use base components (`Col`, `Row`, `Text`) for layout
- Apply your design tokens for colors, spacing
- Use base component props (`p4`, `round2`, `gap`, etc.) for styling
- Export TypeScript interfaces for your components

---

## Responsive Layout Patterns

The `quickly-react` library provides several ways to create responsive layouts.

### 6.1 Responsive Styles (rStyle)

Use `rStyle` in prop definitions to make styles responsive:

```tsx
{
  propName: 'h1',
  obj: {
    rStyle: {
      md: {
        fontSize: 48,
        lineHeight: 48 * 1.4,
      },
      xs: {
        fontSize: 32,
        lineHeight: 32 * 1.4,
      },
    },
  },
},
```

**Breakpoints:**
- `xs`: 0px
- `sm`: 576px
- `md`: 768px
- `lg`: 992px
- `xl`: 1200px
- `xxl`: 1380px
- `xxxl`: 1560px

### 6.2 Grid Component

The `Grid` component provides responsive column layouts:

```tsx
<Grid xs="1:1" md="1:1:1" gap={16}>
  <Col>Item 1</Col>
  <Col>Item 2</Col>
  <Col>Item 3</Col>
</Grid>
```

**Grid Rules:**
- `"1:1"`: Two equal columns (flex: 1 each)
- `"1:1:1"`: Three equal columns
- `"2:1"`: Two columns with flex ratio 2:1
- `"50% 50%"`: Two columns with 50% width each
- `"1:."`: All children get flex: 1

**Example:**
```tsx
// Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns
<Grid xs="1" md="1:1" lg="1:1:1:1" gap={16}>
  <StatCard />
  <StatCard />
  <StatCard />
  <StatCard />
</Grid>
```

### 6.3 useWindowWidthBreakpoint Hook

For custom responsive logic:

```tsx
import { useWindowWidthBreakpoint } from 'quickly-react';

function MyComponent() {
  const breakpoint = useWindowWidthBreakpoint(['xs', 'sm', 'md', 'lg']);
  
  // breakpoint will be 'xs', 'sm', 'md', or 'lg'
  const isMobile = breakpoint === 'xs' || breakpoint === 'sm';
  
  return (
    <Col>
      {isMobile ? <MobileView /> : <DesktopView />}
    </Col>
  );
}
```

### 6.4 useResponsiveStyle Hook

For responsive style values:

```tsx
import { useResponsiveStyle } from 'quickly-react';

function MyComponent() {
  const padding = useResponsiveStyle({
    xs: 16,
    md: 24,
    lg: 32,
  });
  
  return <Col style={{ padding }}>Content</Col>;
}
```

### 6.5 Responsive Component Pattern

Example: Sidebar that becomes a burger menu on mobile:

```tsx
import { useWindowWidthBreakpoint } from 'quickly-react';
import { Col, Row } from '@/components/base';

function DashboardLayout({ sidebar, content }) {
  const breakpoint = useWindowWidthBreakpoint(['xs', 'sm', 'md', 'lg']);
  const isMobile = breakpoint === 'xs' || breakpoint === 'sm';
  
  if (isMobile) {
    return (
      <Col flex1>
        <BurgerMenu />
        {content}
      </Col>
    );
  }
  
  return (
    <Row flex1>
      {sidebar}
      {content}
    </Row>
  );
}
```

---

## Best Practices

### 7.1 Organize Your Props

Group related props together:

```tsx
// ✅ Good: Grouped by concern
textProps: [
  // Font weights
  { propName: 'bold', ... },
  { propName: 'semiBold', ... },
  
  // Typography scale
  { propName: 'h1', ... },
  { propName: 'h2', ... },
  
  // Colors
  { propName: 'colorDefault', ... },
]
```

### 7.2 Use Default Props Wisely

Only mark props as `isDefault: true` if they should apply to **all** instances:

```tsx
// ✅ Good: Applied to all Text
{ propName: 'regular', isDefault: true, ... }

// ❌ Bad: Not all text should be bold
{ propName: 'bold', isDefault: true, ... }
```

### 7.3 Leverage Props Composition

Use `props` in `addProps` to compose props:

```tsx
{
  propName: 'h1',
  obj: {
    props: {
      bold: true, // h1 includes bold
    },
    style: {
      fontSize: 48,
    },
  },
}
```

### 7.4 Theme Support

Use `theme` for colors that change with light/dark mode:

```tsx
{
  propName: 'bgTheme',
  obj: {
    theme: {
      dark: { backgroundColor: '#181A20' },
      light: { backgroundColor: '#FFFFFF' },
    },
  },
}
```

### 7.5 TypeScript Interfaces

Always define TypeScript interfaces matching your prop names:

```tsx
export interface ITextProps {
  bold?: boolean;
  h1?: boolean;
  // ... match all propName values
}
```

### 7.6 Component Structure

Organize your design system:

```
components/
  base/
    index.tsx          # Base components (Col, Row, Text, Grid)
    tokens.ts          # Design tokens
    textProps.ts       # Text prop definitions
    viewProps.ts       # View prop definitions
  ui/
    Button.tsx         # Built from base components
    Card.tsx
    FormField.tsx
    ...
```

### 7.7 Testing Props

Use the [Test Playground](./playground.html) to test your prop configurations before implementing them in code.

---

## Complete Example

Here's a complete example of a design system setup:

```tsx
// 1. tokens.ts
export const COLOR = { PRIMARY_500: '#1955A6', ... };
export const SPACING_UNIT = 8;

// 2. textProps.ts
export const textProps = [
  { propName: 'h1', obj: { style: { fontSize: 48 } } },
  { propName: 'bold', obj: { style: { fontWeight: 'bold' } } },
  // ...
];

// 3. viewProps.ts
export const viewProps = [
  { propName: 'bgTheme', obj: { theme: { ... } } },
  // ...
];

// 4. index.tsx (base components)
const BaseComponent = createBase({
  RN,
  addTextProps: textProps,
  addViewProps: viewProps,
  tokens: { unit: SPACING_UNIT, ... },
});

export const { Col, Row, Text, Grid } = BaseComponent;

// 5. Usage
<Col flex1 p4 round2 bgWhite>
  <Text h1 bold>Hello</Text>
  <Row gap={8}>
    <Button title="Click" />
  </Row>
</Col>
```

---

## Next Steps

1. **Start with tokens**: Define your color palette, spacing, and typography
2. **Create text props**: Define typography variants and text styles
3. **Create view props**: Define container styles and theme-aware props
4. **Generate base components**: Use `createBase` to create your foundation
5. **Build UI components**: Create buttons, cards, forms, etc. using base components
6. **Add responsive behavior**: Use `rStyle`, `Grid`, or hooks for responsive layouts

For a complete working example, check the `examples/ExpoApp` folder in this repository.
