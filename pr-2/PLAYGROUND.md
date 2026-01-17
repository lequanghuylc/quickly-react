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

## Automatic Deployment with GitHub Actions

The playground is automatically deployed to a temporary preview URL when you push changes to a pull request. This allows you to share and test the playground without running it locally.

### How It Works

When you create or update a pull request that modifies `playground.html` or `PLAYGROUND.md`, a GitHub Actions workflow automatically:

1. **Builds the preview**: Copies the playground files to a PR-specific directory
2. **Deploys to GitHub Pages**: Publishes the files to the `gh-pages` branch
3. **Comments on the PR**: Adds a comment with the preview URL

The preview URL follows this pattern: `https://[username].github.io/[repo-name]/pr-[number]/`

### Setup GitHub Pages for Your Repository

If you're setting up this workflow in your own repository, follow these steps:

#### 1. Enable GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select the **gh-pages** branch and **/ (root)** folder
5. Click **Save**

#### 2. Configure Workflow Permissions

1. Go to **Settings** > **Actions** > **General**
2. Scroll down to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

#### 3. Trigger the Workflow

The workflow will automatically run when you:
- Open a new pull request that includes `playground.html` or `PLAYGROUND.md`
- Push new commits to an existing pull request that affects these files

#### 4. Access Your Preview

After the workflow completes (usually 1-2 minutes), look for a comment on your PR with the preview URL. Click the link to access your deployed playground!

### Example Workflow Run

Here's what happens when you push to a PR:

```yaml
# Example: PR #1 preview deployment
1. Code pushed to PR #1
   ├── Workflow triggered
   ├── Files copied to public/pr-1/
   ├── Deployed to gh-pages branch
   └── Comment added with preview URL
   
2. Preview URL available at:
   https://[username].github.io/[repo-name]/pr-1/
```

### Manual Deployment (Alternative)

If you prefer to deploy manually or test locally before pushing:

```bash
# Install gh-pages package (one-time setup)
npm install -g gh-pages

# Deploy playground manually
gh-pages -d . -s playground.html -s PLAYGROUND.md

# Your playground will be available at:
# https://[username].github.io/[repo-name]/
```

### Troubleshooting

**Preview not loading?**
- Wait 1-2 minutes after the workflow completes for GitHub Pages to build
- Check that GitHub Pages is enabled in your repository settings
- Verify the workflow completed successfully in the Actions tab

**Workflow not running?**
- Ensure workflow permissions are set correctly (see setup steps above)
- Check that you're modifying `playground.html` or `PLAYGROUND.md` in your PR
- Verify the `.github/workflows/deploy-playground.yml` file exists

**404 Error on preview URL?**
- The gh-pages branch might not exist yet - the first deployment creates it
- Check if the workflow has write permissions to create branches
- Verify GitHub Pages is configured to use the gh-pages branch

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
