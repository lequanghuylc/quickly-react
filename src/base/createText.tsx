import React from "react";
import QuickComponent from "../QuickComponent";

type TAddPropsParam = Array<{
    propName: string,
    obj: any,
    isDefault?: boolean,
}>;

export const createText = <T,>(RN : any, addProps : TAddPropsParam = [], addCommonStyle?: any) => {
    
    interface IText {
        (props: T): any;
    }
    
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
    const { Text : RNText } = RN;
    const Text : IText = quickComponent.make(RNText);
    return Text;
};