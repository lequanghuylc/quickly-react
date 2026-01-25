import React from 'react';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';
import { FigmaNode, ComponentRegistry, getColorFromNode, getTextFromNode } from '@/utils/figmaParser';
import { IconRegistry } from '@/utils/iconRegistry';
import { Icon } from './Icon';
import * as Primitives from '@/components/primitives';

export interface FigmaRendererProps {
  node: FigmaNode;
  registry: ComponentRegistry;
  iconRegistry?: IconRegistry;
  depth?: number;
}

export function FigmaRenderer({ node, registry, iconRegistry, depth = 0 }: FigmaRendererProps) {
  // Skip invisible or removed nodes
  if (node.visible === false || node.removed === true || node.opacity === 0) {
    return null;
  }
  
  // Check if this is an icon or references an icon
  if (iconRegistry) {
    // Check if this node itself is an icon
    const iconById = iconRegistry.getById(node.id);
    if (iconById) {
      const iconColor = getColorFromNode(node) || COLOR.GREYSCALE_900;
      return <Icon icon={iconById} color={iconColor} id={node.id} />;
    }

    // Check if node name suggests it's an icon
    const nodeName = node.name?.toLowerCase() || '';
    if (nodeName.startsWith('icon/') || node.isAsset === true) {
      const iconByName = iconRegistry.getByName(nodeName.replace('icon/', ''));
      if (iconByName) {
        const iconColor = getColorFromNode(node) || COLOR.GREYSCALE_900;
        return <Icon icon={iconByName} color={iconColor} id={node.id} />;
      }
    }

    // Check if this node references an icon by componentId
    if (node.componentId) {
      const referencedIcon = iconRegistry.getById(node.componentId);
      if (referencedIcon) {
        const iconColor = getColorFromNode(node) || COLOR.GREYSCALE_900;
        return <Icon icon={referencedIcon} color={iconColor} id={node.id} />;
      }
    }
  }
  
  // Check if this component has been rendered before (deduplication by ID)
  // Only cache at root level to avoid infinite loops
  const cached = depth === 0 ? registry.getCached(node.id) : null;
  if (cached) {
    return <>{cached}</>;
  }
  
  // Check if this node references another component (by checking if it exists in registry)
  if (node.componentId && registry.has(node.componentId)) {
    const referencedNode = registry.get(node.componentId);
    if (referencedNode) {
      return <FigmaRenderer node={referencedNode} registry={registry} iconRegistry={iconRegistry} depth={depth + 1} />;
    }
  }

  const renderNode = (n: FigmaNode): React.ReactNode => {
    const nodeName = n.name?.toLowerCase() || '';
    const nodeType = n.type?.toLowerCase() || '';
    
    // Try to match with existing primitive components
    if (nodeName.includes('accordion')) {
      const title = getTextFromNode(n) || 'Accordion Item';
      return (
        <Primitives.AccordionItem
          id={n.id}
          title={title}
          content="Content from Figma"
        />
      );
    }

    if (nodeName.includes('button')) {
      const label = getTextFromNode(n) || 'Button';
      return (
        <Primitives.Button
          id={n.id}
          label={label}
          variant="primary"
        />
      );
    }

    if (nodeName.includes('checkbox')) {
      const label = getTextFromNode(n) || 'Checkbox';
      return (
        <Primitives.Checkbox
          id={n.id}
          label={label}
        />
      );
    }

    if (nodeName.includes('input') || nodeName.includes('textfield')) {
      return (
        <Primitives.Input
          id={n.id}
          placeholder="Enter text..."
        />
      );
    }

    if (nodeName.includes('textarea')) {
      return (
        <Primitives.Textarea
          id={n.id}
          placeholder="Enter text..."
        />
      );
    }

    if (nodeName.includes('switch') || nodeName.includes('toggle')) {
      return (
        <Primitives.Switch
          id={n.id}
        />
      );
    }

    if (nodeName.includes('radio')) {
      const label = getTextFromNode(n) || 'Radio';
      return (
        <Primitives.RadioButton
          id={n.id}
          label={label}
        />
      );
    }

    if (nodeName.includes('avatar')) {
      const name = getTextFromNode(n) || 'User';
      return (
        <Primitives.Avatar
          id={n.id}
          name={name}
        />
      );
    }

    if (nodeName.includes('tab')) {
      if (nodeName.includes('card')) {
        return (
          <Primitives.TabCard
            id={n.id}
            title="Tab Card"
            content="Content"
          />
        );
      }
      // Handle tabs container
      if (n.children && n.children.length > 0) {
        const tabLabels = n.children
          .map(child => getTextFromNode(child))
          .filter(Boolean) as string[];
        if (tabLabels.length > 0) {
          return <Primitives.Tabs id={n.id} items={tabLabels} />;
        }
      }
    }

    // Default rendering for text nodes
    if (nodeType === 'TEXT' || n.characters) {
      const text = getTextFromNode(n) || '';
      const color = getColorFromNode(n) || COLOR.GREYSCALE_900;
      const fontSize = n.fontSize || 14;
      const fontWeight = n.fontWeight || 400;
      const fontFamily = n.fontFamily || 'Inter, sans-serif';
      const lineHeight = n.lineHeightPx || n.lineHeight?.value || fontSize * 1.5;
      const textAlign = n.textAlignHorizontal || 'LEFT';
      const letterSpacing = n.letterSpacing?.value || 0;

      return (
        <Text
          id={n.id}
          style={{
            color,
            fontSize,
            fontWeight: fontWeight.toString(),
            fontFamily,
            lineHeight,
            textAlign: textAlign.toLowerCase(),
            letterSpacing,
          }}
        >
          {text}
        </Text>
      );
    }

    // Default rendering for containers
    const bgColor = getColorFromNode(n);
    const boundingBox = n.absoluteBoundingBox;
    
    // Extract Figma layout properties
    const layoutMode = n.layoutMode; // 'HORIZONTAL', 'VERTICAL', or undefined
    const paddingLeft = n.paddingLeft || n.horizontalPadding || 0;
    const paddingRight = n.paddingRight || n.horizontalPadding || 0;
    const paddingTop = n.paddingTop || n.verticalPadding || 0;
    const paddingBottom = n.paddingBottom || n.verticalPadding || 0;
    const itemSpacing = n.itemSpacing || 0;
    const gap = itemSpacing;
    
    // Alignment
    const primaryAxisAlignItems = n.primaryAxisAlignItems || 'MIN';
    const counterAxisAlignItems = n.counterAxisAlignItems || 'MIN';
    
    // Corner radius
    const cornerRadius = n.cornerRadius || 
                        (n.cornerSmoothing !== undefined ? 0 : undefined) ||
                        (n.topLeftRadius !== undefined ? n.topLeftRadius : undefined);
    
    // Borders
    const strokes = n.strokes || [];
    const strokeWeight = n.strokeWeight || 0;
    const borderColor = strokes.length > 0 && strokes[0].type === 'SOLID' && strokes[0].color
      ? `rgba(${Math.round(strokes[0].color.r * 255)}, ${Math.round(strokes[0].color.g * 255)}, ${Math.round(strokes[0].color.b * 255)}, ${strokes[0].color.a || 1})`
      : undefined;

    const containerStyle: any = {
      position: 'relative',
    };
    
    // Opacity
    if (n.opacity !== undefined && n.opacity < 1) {
      containerStyle.opacity = n.opacity;
    }
    
    if (bgColor) {
      containerStyle.backgroundColor = bgColor;
    }
    
    if (cornerRadius !== undefined && cornerRadius > 0) {
      containerStyle.borderRadius = cornerRadius;
    }
    
    if (borderColor && strokeWeight > 0) {
      containerStyle.borderWidth = strokeWeight;
      containerStyle.borderColor = borderColor;
    }
    
    // Padding - use Figma padding values
    const hasPadding = paddingLeft || paddingRight || paddingTop || paddingBottom;
    if (hasPadding) {
      containerStyle.paddingLeft = paddingLeft;
      containerStyle.paddingRight = paddingRight;
      containerStyle.paddingTop = paddingTop;
      containerStyle.paddingBottom = paddingBottom;
    }
    
    // Width/Height constraints
    if (n.layoutSizingHorizontal === 'FIXED' && boundingBox) {
      containerStyle.width = boundingBox.width;
    } else if (n.layoutSizingHorizontal === 'HUG') {
      containerStyle.width = 'auto';
    } else if (n.layoutSizingHorizontal === 'FILL') {
      containerStyle.width = '100%';
    }
    
    if (n.layoutSizingVertical === 'FIXED' && boundingBox) {
      containerStyle.height = boundingBox.height;
    } else if (n.layoutSizingVertical === 'HUG') {
      containerStyle.height = 'auto';
    } else if (n.layoutSizingVertical === 'FILL') {
      containerStyle.height = '100%';
    }

    // Determine if it's a Row or Col based on layout mode
    const isRow = layoutMode === 'HORIZONTAL';
    const isCol = layoutMode === 'VERTICAL';
    
    // Fallback: check children positions if no explicit layout mode
    let shouldUseRow = isRow;
    if (!isRow && !isCol && n.children && n.children.length > 1) {
      const firstChild = n.children[0];
      const secondChild = n.children[1];
      if (firstChild?.absoluteBoundingBox && secondChild?.absoluteBoundingBox) {
        // If children are side by side (similar Y, different X), use Row
        const yDiff = Math.abs(firstChild.absoluteBoundingBox.y - secondChild.absoluteBoundingBox.y);
        const xDiff = Math.abs(firstChild.absoluteBoundingBox.x - secondChild.absoluteBoundingBox.x);
        shouldUseRow = yDiff < 10 && xDiff > 10;
      }
    }

    const Container = shouldUseRow ? Row : Col;
    
    // Apply alignment props
    const containerProps: any = {
      id: n.id,
      style: containerStyle,
    };
    
    if (gap > 0) {
      containerProps.gap = gap;
    }
    
    // Map Figma alignment to quickly-react props
    if (counterAxisAlignItems === 'CENTER') {
      containerProps.middle = true;
    } else if (counterAxisAlignItems === 'MAX') {
      containerProps.style = { ...containerStyle, alignItems: 'flex-end' };
    }
    
    if (primaryAxisAlignItems === 'CENTER') {
      containerProps.style = { ...containerStyle, justifyContent: 'center' };
    } else if (primaryAxisAlignItems === 'MAX') {
      containerProps.style = { ...containerStyle, justifyContent: 'flex-end' };
    } else if (primaryAxisAlignItems === 'SPACE_BETWEEN') {
      containerProps.style = { ...containerStyle, justifyContent: 'space-between' };
    }

    const rendered = (
      <Container {...containerProps}>
        {n.children?.map((child, index) => (
          <FigmaRenderer
            key={child.id || index}
            node={child}
            registry={registry}
            iconRegistry={iconRegistry}
            depth={depth + 1}
          />
        ))}
      </Container>
    );

    // Cache the rendered component for reuse
    if (depth === 0) {
      registry.cacheRendered(n.id, rendered);
    }

    return rendered;
  };

  return <>{renderNode(node)}</>;
}

export interface FigmaPageProps {
  data: FigmaNode[];
  title: string;
  iconRegistry?: IconRegistry;
}

export function FigmaPage({ data, title, iconRegistry }: FigmaPageProps) {
  const registry = React.useMemo(() => {
    const { parseFigmaJSON } = require('@/utils/figmaParser');
    return parseFigmaJSON(data);
  }, [data]);

  return (
    <Col flex1 style={{ backgroundColor: COLOR.GREYSCALE_50 }}>
      <Col p4 style={{ backgroundColor: COLOR.PRIMARY_500 }}>
        <Text lg bold style={{ color: COLOR.WHITE }}>
          {title}
        </Text>
      </Col>
      <Col p4 gap={4}>
        {data.map((node, index) => (
          <Col 
            key={node.id || index} 
            mb4
            style={{
              width: '100%',
              maxWidth: '100%',
            }}
          >
            <FigmaRenderer node={node} registry={registry} iconRegistry={iconRegistry} />
          </Col>
        ))}
      </Col>
    </Col>
  );
}
