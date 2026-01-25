// Export all primitive components with their IDs
export * from './AccordionItem';
export * from './Button';
export * from './Checkbox';
export * from './SectionItems';
export * from './Input';
export * from './Tabs';
export * from './Textarea';
export * from './Avatar';
export * from './Menubar';
export * from './Switch';
export * from './NavigationMenu';
export * from './Poster';
export * from './RadioButton';
export * from './Collapsible';
export * from './ScrollListItem';
export * from './Palette';
export * from './InlineCode';
export * from './TableItem';

// Component ID registry for JSON import
export const COMPONENT_IDS = {
  ACCORDION_ITEM: 'accordion-item',
  BUTTON: 'button',
  CHECKBOX: 'checkbox',
  SECTION_ITEMS: 'section-items',
  DIVIDER: 'divider',
  MENU_ITEM: 'menu-item',
  MENU_SECTION_TITLE: 'menu-section-title',
  INPUT: 'input',
  TAB_ITEM: 'tab-item',
  TABS: 'tabs',
  TAB_CARD: 'tab-card',
  TEXTAREA: 'textarea',
  AVATAR: 'avatar',
  MENUBAR_ITEM: 'menubar-item',
  MENUBAR: 'menubar',
  SWITCH: 'switch',
  NAVIGATION_MENU_ITEM: 'navigation-menu-item',
  NAVIGATION_MENU_CONTENT_ITEM: 'navigation-menu-content-item',
  POSTER: 'poster',
  NAVIGATION_MENU_CONTENT: 'navigation-menu-content',
  NAVIGATION_MENU: 'navigation-menu',
  RADIO_BUTTON: 'radio-button',
  COLLAPSIBLE: 'collapsible',
  SCROLL_LIST_ITEM: 'scroll-list-item',
  PALETTE: 'palette',
  INLINE_CODE: 'inline-code',
  TABLE_ITEM: 'table-item',
} as const;
