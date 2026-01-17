# Quickly React - Test Playground

A browser-based debugging tool for testing and visualizing how `quickly-react` computes props and styles from your component configurations.

## What is it?

The playground allows you to:
- Define custom props with their styles, responsive styles (rStyle), themes, and nested props
- Input component props in JSON format
- See the computed/combined props and styles in real-time
- Debug prop inheritance and style composition
- Test responsive breakpoints and theme configurations

## How to use it

### 1. Open the playground

Simply open `playground.html` in your web browser. No build step or dependencies required!

```bash
# Option 1: Open directly in browser
open playground.html

# Option 2: Serve via HTTP server
python3 -m http.server 8080
# Then visit http://localhost:8080/playground.html
```

### 2. Configure your props

In the **Props Configuration** section, define your custom props using JSON format:

```json
{
  "bold": {
    "style": {
      "fontWeight": "bold"
    }
  },
  "h1": {
    "props": {
      "bold": true
    },
    "rStyle": {
      "md": {
        "fontSize": 30
      },
      "xs": {
        "fontSize": 24
      }
    }
  }
}
```

### 3. Input component props

In the **Component Props** section, specify which props you want to apply:

```json
{
  "h1": true,
  "marginTop": 20,
  "textAlign": "center"
}
```

### 4. Set default props (optional)

Specify props that should be applied by default to all components:

```json
["body", "colorMain"]
```

### 5. Enable/disable style prop detection

Check the "Detect Style Props" checkbox to allow passing style properties directly as props (e.g., `marginTop`, `color`, `fontSize`).

### 6. Compute and view results

Click the **"Compute Props & Styles"** button to see:
- **Combined Props**: The full merged props object including theme, rStyle, computedStyle, and remaining props
- **Combined Style**: The final computed style object that would be applied to your component
- **Responsive Styles**: Breakpoint-specific styles (xs, sm, md, lg, xl, xxl, xxxl)
- **Theme Styles**: Theme-specific styles (light, dark, etc.)

## Understanding the output

### Combined Props
Shows the complete props object after processing, including:
- `theme`: Theme-specific color configurations
- `computedStyle`: Styles computed from prop definitions
- `rStyle`: Responsive styles for different breakpoints
- `props`: Remaining props after processing custom props

### Combined Style
The final style object that combines:
- Computed styles from custom props
- Style props (if detection is enabled)
- Direct style props passed to the component

### Responsive Styles (rStyle)
Styles that will be applied based on screen width breakpoints:
- `xs`: Extra small screens
- `sm`: Small screens
- `md`: Medium screens
- `lg`: Large screens
- `xl`: Extra large screens
- `xxl`: Extra extra large screens
- `xxxl`: Extra extra extra large screens

### Theme Styles
Styles that change based on the active theme (e.g., light mode vs. dark mode).

## Example workflows

### Example 1: Typography system
Test heading styles with prop inheritance:
```json
// Props Config
{
  "bold": { "style": { "fontWeight": "bold" } },
  "h1": {
    "props": { "bold": true },
    "style": { "fontSize": 32 }
  }
}

// Component Props
{ "h1": true, "marginTop": 20 }
```

### Example 2: Button variants
Test button styling with multiple props:
```json
// Props Config
{
  "primary": {
    "style": {
      "backgroundColor": "#2196F3",
      "color": "white"
    }
  },
  "rounded": { "style": { "borderRadius": 8 } },
  "large": { "style": { "padding": 16, "fontSize": 18 } }
}

// Component Props
{ "primary": true, "rounded": true, "large": true }
```

## Features

- ✅ No external dependencies - runs entirely in the browser
- ✅ Real-time computation - see results immediately
- ✅ Example presets - quick start with common patterns
- ✅ Error handling - see helpful error messages for invalid JSON
- ✅ Clean UI - split-pane design for easy comparison
- ✅ Full QuickComponent logic - mirrors the actual library behavior

## Tips

1. **Use proper JSON format**: Make sure your JSON is valid (use double quotes, no trailing commas)
2. **Test prop inheritance**: Use the `props` field to include other props
3. **Verify responsive styles**: Check how different breakpoints affect your component
4. **Debug theme styles**: Test light/dark mode configurations
5. **Experiment with style prop detection**: See how it affects direct style props

## Limitations

- The playground uses a simplified version of the QuickComponent logic
- Hooks like `useResponsiveStyle` and `useThemeContext` are not fully simulated
- The current breakpoint is not dynamically detected (shows all breakpoint styles)
- Theme switching is not interactive (shows all theme configurations)

These limitations are intentional to keep the playground simple and focused on debugging prop/style computation logic.
