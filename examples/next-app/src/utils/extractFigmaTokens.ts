/**
 * Utility to extract design tokens from Figma JSON files
 * This extracts colors, typography, and spacing from the Figma design system
 */

import { FigmaNode, rgbToHex } from './figmaParser';

export interface ExtractedTokens {
  colors: Record<string, string>;
  typography: {
    fontFamily: string;
    fontSizes: Record<string, number>;
    fontWeights: Record<string, number>;
    lineHeights: Record<string, number>;
  };
  spacing: {
    unit: number;
  };
}

/**
 * Extract colors from Figma nodes by finding nodes with color fills
 */
export function extractColorsFromFigma(data: FigmaNode[]): Record<string, string> {
  const colors: Record<string, string> = {};
  
  function traverse(node: FigmaNode) {
    // Extract color from fills
    if (node.fills && Array.isArray(node.fills) && node.fills.length > 0) {
      const fill = node.fills[0];
      if (fill.type === 'SOLID' && fill.color) {
        const colorHex = rgbToHex(fill.color.r, fill.color.g, fill.color.b, fill.color.a);
        // Use node name as key if it looks like a color name
        const nodeName = node.name?.toLowerCase() || '';
        if (nodeName.includes('color') || nodeName.includes('primary') || 
            nodeName.includes('secondary') || nodeName.includes('grey') ||
            nodeName.includes('gray') || nodeName.includes('background') ||
            nodeName.includes('foreground') || nodeName.includes('border') ||
            nodeName.includes('muted') || nodeName.includes('accent') ||
            nodeName.includes('destructive') || nodeName.includes('success') ||
            nodeName.includes('warning') || nodeName.includes('error')) {
          colors[nodeName] = colorHex;
        }
      }
    }
    
    if (node.children) {
      node.children.forEach(child => traverse(child));
    }
  }
  
  data.forEach(node => traverse(node));
  
  return colors;
}

/**
 * Extract typography from Figma text nodes
 */
export function extractTypographyFromFigma(data: FigmaNode[]): {
  fontFamily: string;
  fontSizes: Record<string, number>;
  fontWeights: Record<string, number>;
  lineHeights: Record<string, number>;
} {
  const fontSizes: Record<string, number> = {};
  const fontWeights: Record<string, number> = {};
  const lineHeights: Record<string, number> = {};
  let fontFamily = 'Inter, sans-serif';
  
  function traverse(node: FigmaNode) {
    if (node.type === 'TEXT' || node.characters) {
      if (node.fontSize) {
        const sizeKey = `${node.fontSize}px`;
        fontSizes[sizeKey] = node.fontSize;
      }
      if (node.fontWeight) {
        const weightKey = `${node.fontWeight}`;
        fontWeights[weightKey] = node.fontWeight;
      }
      if (node.lineHeightPx) {
        const lineHeightKey = `${node.lineHeightPx}px`;
        lineHeights[lineHeightKey] = node.lineHeightPx;
      }
      if (node.fontFamily) {
        fontFamily = node.fontFamily;
      }
    }
    
    if (node.children) {
      node.children.forEach(child => traverse(child));
    }
  }
  
  data.forEach(node => traverse(node));
  
  return {
    fontFamily,
    fontSizes,
    fontWeights,
    lineHeights,
  };
}
