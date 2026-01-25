/**
 * Icon Registry
 * Maps Figma icon IDs to icon names and SVG paths
 */

export interface IconData {
  id: string;
  name: string;
  svgPath?: string;
  width?: number;
  height?: number;
  color?: string;
}

export class IconRegistry {
  private icons: Map<string, IconData> = new Map();
  private iconsByName: Map<string, IconData> = new Map();

  register(icon: IconData) {
    this.icons.set(icon.id, icon);
    if (icon.name) {
      this.iconsByName.set(icon.name, icon);
    }
  }

  getById(id: string): IconData | undefined {
    return this.icons.get(id);
  }

  getByName(name: string): IconData | undefined {
    return this.iconsByName.get(name);
  }

  has(id: string): boolean {
    return this.icons.has(id);
  }

  getAll(): Map<string, IconData> {
    return this.icons;
  }
}

// Global icon registry instance
export const iconRegistry = new IconRegistry();

/**
 * Parse icons from Figma JSON and register them
 */
export function parseIconsFromFigma(data: any[]): IconRegistry {
  const registry = new IconRegistry();

  function traverse(node: any) {
    // Check if this is an icon (name starts with "icon/" or isAsset is true)
    if (
      (node.name && node.name.toLowerCase().startsWith('icon/')) ||
      node.isAsset === true
    ) {
      const iconName = node.name?.replace('icon/', '').toLowerCase() || 'unknown';
      const iconData: IconData = {
        id: node.id,
        name: iconName,
        width: node.width || node.absoluteBoundingBox?.width || 24,
        height: node.height || node.absoluteBoundingBox?.height || 24,
      };

      // Try to extract SVG path from children
      if (node.children) {
        const svgNode = findSVGNode(node);
        if (svgNode) {
          iconData.svgPath = extractSVGPath(svgNode);
        }
      }

      registry.register(iconData);
    }

    // Traverse children
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach((child: any) => traverse(child));
    }
  }

  data.forEach((node) => traverse(node));

  return registry;
}

function findSVGNode(node: any): any {
  if (node.type === 'VECTOR' || node.type === 'BOOLEAN_OPERATION') {
    return node;
  }
  if (node.children) {
    for (const child of node.children) {
      const found = findSVGNode(child);
      if (found) return found;
    }
  }
  return null;
}

function extractSVGPath(node: any): string | undefined {
  // Try to get path from fillGeometry or strokeGeometry
  if (node.fillGeometry && node.fillGeometry.length > 0) {
    return node.fillGeometry[0].data;
  }
  if (node.strokeGeometry && node.strokeGeometry.length > 0) {
    return node.strokeGeometry[0].data;
  }
  return undefined;
}
