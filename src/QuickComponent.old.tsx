import React from 'react';
import { useMemo } from 'react';
import { useCombineStyle } from './useCombineStyle';
import { usePropsStyle } from './hooks/usePropsStyle';
import {
  IStoreProps,
  IAddProps,
  IPropSetup,
  TReactComponent,
  IAddPropsArray,
} from './types';

// problem needs to solve
// 1: quick props & responsive
// 2: theme color
// 3: advance remote content

interface TDefaultProps {
  [propName: string]: boolean,
}

interface IQuickComponent {
  propsBank: IStoreProps,
  defaultProps: TDefaultProps,
  addProps(name: string, objProps : IAddProps) : IPropSetup,
  setupDefaultProps(defaultArrayProps: Array<IPropSetup>): void,
  make<T>(Comp : TReactComponent) : TReactComponent,
}

type TSetupOptions = {
  shouldDetectStyleProps?: boolean,
}

class QuickComponent implements IQuickComponent {

  propsBank : IStoreProps = {}
  defaultProps: TDefaultProps = {};
  shouldDetectStyleProps : boolean = false;

  addProps(name: string, objProps : IAddProps) : IPropSetup {
    this.propsBank[name] = {
      name,
      ...objProps,
    };
    return this.propsBank[name];
  }

  setupDefaultProps(defaultArrayProps: Array<IPropSetup>, options : TSetupOptions = {}) {
    this.shouldDetectStyleProps = Boolean(options.shouldDetectStyleProps);
    defaultArrayProps.forEach((v : IPropSetup) => {
      this.defaultProps[v.name] = true;
    });
  }

  _withoutStyle({ style, ...props } : any) {
    return { ...props };
  }

  _combineProps(p : IAddPropsArray) : IAddPropsArray {
    const combinedProps : IAddPropsArray = {
      theme: Object.assign({}, p.theme),
      // support both reactjs and react-native style: object and array
      style: Array.isArray(p.style) ?  p.style.slice() : Object.assign({}, p.style),
      rStyle: Object.assign({}, p.rStyle),
      props: Object.assign({}, {
        ...this.defaultProps,
        ...p.props,
      }),
    };

    for (let key in combinedProps.props) {
      if (this.propsBank[key] && combinedProps.props[key] === true) {
        const bankData = this.propsBank[key];
        if (bankData.theme) {
          for (let themeValue in bankData.theme) {
            combinedProps.theme = combinedProps.theme || {};
            combinedProps.theme[themeValue] = {
              ...combinedProps.theme[themeValue],
              ...bankData.theme[themeValue],
            };
          }
        }
        if (bankData.style) {
          combinedProps.style = Array.isArray(combinedProps.style) ? [
            ...combinedProps.style,
            bankData.style,
          ] : {
            ...combinedProps.style,
            ...bankData.style,
          };
        }
        if (bankData.rStyle) {
          for (let breakpoint in bankData.rStyle) {
            combinedProps.rStyle = combinedProps.rStyle || {};
            combinedProps.rStyle[breakpoint] = {
              ...combinedProps.rStyle[breakpoint],
              ...bankData.rStyle[breakpoint],
            }
          }
        }
        if (bankData.props) {
          combinedProps.props = {
            ...combinedProps.props,
            ...bankData.props,
          };
        }
        delete combinedProps.props[key];
      }
    }
    // check if there's any un-parsed props
    for (let key in combinedProps.props) {
      if (this.propsBank[key]) return this._combineProps(combinedProps);
    }
    return combinedProps;
  }

  make<T>(Comp : TReactComponent) : TReactComponent {
    
    const NewComp = (p : T) => {
      const combinedProps = useMemo(() => {
        return this._combineProps({
          props: this._withoutStyle(p),
          // @ts-ignore // number type = StyleSheet.create
          style: !p.style ? {} : typeof p.style === 'number' ? [p.style] : p.style,
        });
      }, [p]);

      const { theme, rStyle, style, props } = combinedProps;
      const propsStyle = !this.shouldDetectStyleProps ? {} : usePropsStyle(props);
      const combineStyle = useCombineStyle({ theme, rStyle, style, propsStyle });
      // @ts-ignore
      if (p.id === 'test') console.log('combineStyle', combineStyle, { theme, rStyle, style, propsStyle });
      return (
        <Comp
          style = {combineStyle}
          {...props}
        />
      );
    };

    return NewComp;
  }
}

export default QuickComponent;