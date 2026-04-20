# quickly-react Design System Studio

A browser-based wizard for generating a complete, production-ready design system compatible with [quickly-react](https://github.com/lequanghuylc/quickly-react).

## What it does

The studio walks you through five steps to configure your design tokens, then generates a full set of TypeScript component files you can drop straight into any React Native / quickly-react project.

### The wizard

| Step | What you pick |
|------|---------------|
| 1 · Industry | Pre-loaded presets (SaaS, E-Commerce, Healthcare, Finance, Creative, Social) that auto-fill sensible defaults |
| 2 · Colors | 10 curated palettes or a custom color picker; generates the full neutral + semantic scale |
| 3 · Typography | 6 Google Fonts with a live type-scale preview |
| 4 · Shape | Border radius (sharp → rounded → pill) and shadow depth (none → subtle → strong) |
| 5 · Spacing | Base unit size (6 / 8 / 10 / 12 px) that drives all margin/padding shorthand props |

### Live preview

Changes are reflected instantly across four tabs:

- **Components** — Button, IconButton, Input, Textarea, Card, Badge, Dropdown, Section, Checkbox, Radio, Switch, Label, HelperText, FormField, SearchBar, Toast/InfoBox, Accordion
- **Layout** — Left Sidebar, Right Sidebar (Master-Detail), Mobile Header + Burger Drawer + Bottom Nav, Tabs, Modal/Dialog, Tooltip, Popover
- **Tokens** — Color swatches, typography scale, spacing scale, border radius scale
- **Code** — Browse every generated file before downloading

### Download

Click **↓ Download Code** to get a `design-system.zip` containing:

```
design-system/
├── tokens.ts          # All design tokens (colors, fonts, radius, unit)
├── textProps.ts       # Typography prop system + ITextProps interface
├── viewProps.ts       # Layout/visual prop system + IViewProps interface
├── index.tsx          # createBase() entry point — exports Col, Row, Text, Grid
├── README.md          # Usage guide for the generated package
├── components/
│   ├── Button.tsx
│   ├── IconButton.tsx
│   ├── Input.tsx
│   ├── Textarea.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Dropdown.tsx
│   ├── Section.tsx
│   ├── Checkbox.tsx
│   ├── Radio.tsx
│   ├── Switch.tsx
│   ├── Label.tsx
│   ├── HelperText.tsx
│   ├── FormField.tsx
│   ├── SearchBar.tsx
│   ├── Toast.tsx      # + ToastContainer + useToast hook
│   └── Accordion.tsx
└── layouts/
    ├── LeftSidebar.tsx
    ├── MasterDetail.tsx
    ├── Header.tsx
    ├── BottomNav.tsx
    ├── Tabs.tsx
    ├── Dialog.tsx
    ├── Tooltip.tsx
    └── Popover.tsx
```

All generated components use only **react-native** + **quickly-react** — no external UI libraries required.

## Running locally

```bash
cd studio
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Tech stack

- **Vite + React 18** — studio UI
- **JSZip + file-saver** — client-side zip generation and download
- **Google Fonts** — Inter, Poppins, DM Sans, Nunito, Outfit, Plus Jakarta Sans (loaded in `index.html`)
- No backend required — everything runs in the browser
