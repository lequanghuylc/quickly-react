/**
 * Figma JSON Parser Utility
 * Extracts and processes Figma component data for rendering
 */

export interface FigmaNode {
  id: string;
  name: string;
  type?: string;
  children?: FigmaNode[];
  fills?: Array<{ type: string; color?: { r: number; g: number; b: number; a?: number } }>;
  characters?: string;
  fontSize?: number;
  fontWeight?: number;
  fontFamily?: string;
  lineHeight?: { unit: string; value: number };
  lineHeightPx?: number;
  textAlignHorizontal?: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED';
  letterSpacing?: { unit: string; value: number };
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  // Layout properties
  layoutMode?: 'HORIZONTAL' | 'VERTICAL' | 'NONE';
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  horizontalPadding?: number;
  verticalPadding?: number;
  itemSpacing?: number;
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN';
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE';
  // Styling
  cornerRadius?: number;
  cornerSmoothing?: number;
  topLeftRadius?: number;
  topRightRadius?: number;
  bottomLeftRadius?: number;
  bottomRightRadius?: number;
  strokes?: Array<{ type: string; color?: { r: number; g: number; b: number; a?: number } }>;
  strokeWeight?: number;
  componentId?: string;
  visible?: boolean;
  removed?: boolean;
  opacity?: number;
  isAsset?: boolean;
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';
  [key: string]: any;
}

export interface ComponentReference {
  id: string;
  componentId: string;
  props?: Record<string, any>;
}

export class ComponentRegistry {
  private components: Map<string, FigmaNode> = new Map();
  private renderedComponents: Map<string, React.ReactNode> = new Map();

  register(id: string, component: FigmaNode) {
    this.components.set(id, component);
  }

  get(id: string): FigmaNode | undefined {
    return this.components.get(id);
  }

  has(id: string): boolean {
    return this.components.has(id);
  }

  cacheRendered(id: string, rendered: React.ReactNode) {
    this.renderedComponents.set(id, rendered);
  }

  getCached(id: string): React.ReactNode | undefined {
    return this.renderedComponents.get(id);
  }

  getAll(): Map<string, FigmaNode> {
    return this.components;
  }
}

export function parseFigmaJSON(data: FigmaNode[]): ComponentRegistry {
  const registry = new ComponentRegistry();
  
  function traverse(node: FigmaNode) {
    // Register the node by its ID
    registry.register(node.id, node);
    
    // Traverse children
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach(child => traverse(child));
    }
  }

  // Process all root nodes
  data.forEach(node => traverse(node));

  return registry;
}

export function extractComponentName(node: FigmaNode): string {
  return node.name || 'Unnamed';
}

export function rgbToHex(r: number, g: number, b: number, a?: number): string {
  const toHex = (n: number) => {
    const hex = Math.round(n * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  
  if (a !== undefined && a < 1) {
    const alpha = Math.round(a * 255).toString(16);
    return `${hex}${alpha.length === 1 ? '0' + alpha : alpha}`;
  }
  
  return hex;
}

export function getColorFromNode(node: FigmaNode): string | null {
  if (node.fills && Array.isArray(node.fills) && node.fills.length > 0) {
    const fill = node.fills[0];
    if (fill.type === 'SOLID' && fill.color) {
      return rgbToHex(fill.color.r, fill.color.g, fill.color.b, fill.color.a);
    }
  }
  return null;
}

export function getTextFromNode(node: FigmaNode): string | null {
  if (node.characters) {
    return node.characters;
  }
  if (node.children) {
    const textNodes = node.children.filter(child => child.characters);
    if (textNodes.length > 0) {
      return textNodes.map(child => child.characters).join(' ');
    }
  }
  return null;
}
