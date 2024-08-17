import React from 'react';
import { createPressable, type IPressableViewProps } from './createPressable';
import { createText } from './createText';

type TAddPropsParam = Array<{
    propName: string,
    obj: any,
    isDefault: boolean,
}>;

export const createBase = <TCol, TRow, TText>(RN: any, addTextProps : TAddPropsParam, commonStyles: any) => {
    const Col = createPressable<TCol>(RN, [], commonStyles);

    const Row = createPressable<TRow>(RN, [
        {
            propName: 'defaultRow', obj: {
                flexDirection: 'row',
                alignItems: 'center',
            }, isDefault: true
        },
    ], commonStyles);

    interface IRatioColProps {
        ratio: number, // width / height
        children: any,
        width: number | string,
        [otherProps: string]: any,
    }

    const RatioCol: React.FC<IRatioColProps & TCol & any> = ({ ratio, children, width, ...props }) => {
        return (
            <Col width={width} {...props}>
                <Col paddingBottom={100 / ratio + '%'}>
                    <Col position="absolute" top={0} left={0} right={9} bottom={0}>
                        {children}
                    </Col>
                </Col>
            </Col>
        );
    };

    const Text = createText<TText>(RN, addTextProps, commonStyles);

    return {
        Col,
        Row,
        RatioCol,
        Text,
    }
}