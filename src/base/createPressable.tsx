import React from "react";
import QuickComponent from "../QuickComponent";

export interface IPressableViewProps {
    onPress?: () => any;
    pressedStyle?: any;
    onRef?: any;
    style?: any;
    children?: any;
    onLayout?: any;
    [otherProps: string]: any;
}

type TAddPropsParam = Array<{
    propName: string,
    obj: any,
    isDefault: boolean,
}>;

export const createPressable = <T,>(RN : any, addProps : TAddPropsParam = [], addCommonStyle?: any) : React.FC<T & IPressableViewProps & any> => {
    const quickComponent = new QuickComponent();
    const defaultProps : any = [];
    addProps.forEach(({ propName, obj, isDefault }) => {
        const newProp = quickComponent.addProps(propName, obj);
        if (isDefault) defaultProps.push(newProp);
    });
    quickComponent.setupDefaultProps(defaultProps, {
        shouldDetectStyleProps: true,
    });
    !!addCommonStyle && addCommonStyle(quickComponent);
    const { View, TouchableOpacity, Pressable } = RN;
    const PressabelComponent = (props: IPressableViewProps) => {
        return !props.onPress ? <View ref={props.onRef} {...props} /> : (
            Pressable ? (
                <Pressable
                    ref={props.onRef}
                    {...props}
                    style={({ pressed } : any) => {
                        return [
                            ...(!pressed ? [] : [
                                { opacity: pressed ? 0.9 : 1 },
                                ...(Array.isArray(props.pressedStyle) ? props.pressedStyle : [props.pressedStyle]),
                            ]),
                            ...(Array.isArray(props.style) ? props.style : [props.style]),
                        ]
                    }}
                />
            ) : <TouchableOpacity ref={props.onRef} activeOpacity={0.9} {...props} />
        )
    };
    const PressableView = quickComponent.make(PressabelComponent);
    return PressableView;
};