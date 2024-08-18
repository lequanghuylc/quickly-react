import React from 'react';
import { createPressable, type IPressableViewProps } from './createPressable';
import { createText } from './createText';
import { addCommonStyles, type ITokens, type ICommonStyle } from './addCommonStyles';

type TAddPropsParam = Array<{
    propName: string,
    obj: any,
    isDefault: boolean,
}>;

interface ICreateBaseOptions {
    RN: any,
    addTextProps: TAddPropsParam,
    commonStyles: ICommonStyle,
    tokens: ITokens,
}

export const createBase = <TCol, TRow, TText>({ RN, addTextProps, commonStyles, tokens } : ICreateBaseOptions) => {

    const addCommonStylesCombined = (quickComponentInstance: any) => {
        addCommonStyles(quickComponentInstance, [commonStyles], tokens);
    }

    const Col = createPressable<TCol>(RN, [], addCommonStylesCombined);

    const Row = createPressable<TRow>(RN, [
        {
            propName: 'defaultRow', obj: {
                flexDirection: 'row',
                alignItems: 'center',
            }, isDefault: true
        },
    ], addCommonStylesCombined);

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

    const Text = createText<TText>(RN, addTextProps, addCommonStylesCombined);

    return {
        Col,
        Row,
        RatioCol,
        Text,
    }
}