import React from 'react';
import { createPressable, type IPressableViewProps } from './createPressable';
import { createText } from './createText';
import { addCommonStyles, type ITokens, type ICommonStyle, type TCommonPropStyle } from './addCommonStyles';
import { createGrid, type IGridProps } from './createGrid';

type TAddPropsParam = Array<{
    propName: string,
    obj: any,
    isDefault?: boolean,
}>;

interface ICreateBaseOptions {
    RN: any,
    addTextProps: TAddPropsParam,
    addViewProps: TAddPropsParam,
    commonStyles: ICommonStyle,
    tokens: ITokens,
}

export const createBase = <TCol, TRow, TText>({ RN, addTextProps = [], addViewProps = [], commonStyles, tokens } : ICreateBaseOptions) => {

    const addCommonStylesCombined = (quickComponentInstance: any) => {
        addCommonStyles(quickComponentInstance, [commonStyles], tokens);
    }

    const Col = createPressable<TCol & TCommonPropStyle>(RN, addViewProps, addCommonStylesCombined);

    const Row = createPressable<TRow & TCommonPropStyle>(RN, [
        {
            propName: 'defaultRow',
            obj: {
                style: {
                    flexDirection: 'row',
                    alignItems: 'center',
                },
            },
            isDefault: true
        },
    ], addCommonStylesCombined);

    interface IRatioColProps {
        ratio: number, // width / height
        children: any,
        width: number | string,
        [otherProps: string]: any,
    }

    const RatioCol = ({ ratio, children, width, ...props } : IRatioColProps & TCol & any) => {
        return (
            <Col width={width} {...props}>
                <Col paddingBottom={100 / ratio + '%'}>
                    <Col position="absolute" top={0} left={0} right={0} bottom={0}>
                        {children}
                    </Col>
                </Col>
            </Col>
        );
    };

    const Text = createText<TText & TCommonPropStyle>(RN, addTextProps, addCommonStylesCombined);

    const Grid = createGrid<TRow & TCommonPropStyle>(Col, Row);

    return {
        Col,
        Row,
        RatioCol,
        Text,
        Grid,
    }
}