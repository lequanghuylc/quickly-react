import React, { useState } from 'react';
import { TOneBreakpoint, useWindowWidthBreakpoint } from '../hooks/useWindowWidthBreakpoint';

export interface IGridProps {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xxl?: string;
    xxxl?: string;
    children?: any;
    initial?: string;
}

export const createGrid = <TRow,>(Col : any, Row : any) => {
    const Grid = ({ children, initial, ...props }: IGridProps & TRow) => {
        const [uniqueId] = useState('responsive_id_' + Math.random());

        const breakpointAccepts = (() => {
            const accepts = [];
            const allBreakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
            for (let key in props) {
                if (allBreakpoints.includes(key)) {
                    accepts.push(key);
                }
                if (key.startsWith('c')) {
                    const withoutC = key.slice(1);
                    const isNumber = !isNaN(Number(withoutC));
                    if (isNumber) {
                        accepts.push(key);
                    }
                }
            }
            return accepts.length === 0 ? allBreakpoints : accepts;
        })();

        const breakpoint = useWindowWidthBreakpoint(breakpointAccepts as Array<TOneBreakpoint>, initial);

        const responsiveRule = props[breakpoint];

        const renderChildren = () => {
            if (!responsiveRule) return children;
            // @ts-ignore
            const childrenArray = React.Children.toArray(props.hasWrapper ? children?.props?.children : children);
            switch (true) {
                case typeof responsiveRule !== 'string':
                    return children;
                    break;
                case responsiveRule.includes('%'):
                    const percent = Number(responsiveRule.replace('%', ''));
                    if (isNaN(percent)) return children;
                    return childrenArray.map((child, childIndex) => (
                        <Col width={responsiveRule} key={'responsive-r1-' + childIndex + uniqueId}>
                            {child}
                        </Col>
                    ));
                    break;
                case responsiveRule === '1:.':
                    return childrenArray.map((child, childIndex) => (
                        <Col flex1 key={'responsive-r2-' + childIndex + uniqueId}>
                            {child}
                        </Col>
                    ));
                    break;
                case responsiveRule.includes(':'):
                    const flexs = responsiveRule.split(':').map((val) => val);
                    if (flexs.filter((val) => isNaN(Number(val)) && val !== 'any' && !val.includes('px')).length > 0) {
                        throw new Error('invalid responsive rule');
                    }
                    return flexs.map((val, i) => (
                        <Col
                            flex={val === 'any' || val.includes('px') ? undefined : val}
                            width={val.includes('px') ? Number(val.replace('px', '')) : undefined}
                            key={'responsive-r3-' + i + uniqueId}
                        >
                            {childrenArray[i]}
                        </Col>
                    ));
                    break;
                default:
                    return children;
            }
        };

        return (
            <Row flexWrap={'wrap'} {...props}>
                {renderChildren()}
            </Row>
        );
    };

    Grid.Item = Col;
    return Grid;
};
