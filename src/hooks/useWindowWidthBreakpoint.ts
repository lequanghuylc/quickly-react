import { Dimensions } from './Dimensions';
import { useEffect } from 'react';
import { useRefState } from '../hooks/useRefState'

export interface IResponsiveRule<T> {
  xs?: T | undefined,
  sm?: T | undefined,
  md?: T | undefined,
  lg?: T | undefined,
  xl?: T | undefined,
  xxl?: T | undefined,
  xxxl?: T | undefined,
  [breakpoint: string]: T | undefined,
}

export interface IGetResponsiveRule<T> {
  (viewportWidth : number, rules : IResponsiveRule<T>): T
}

export const minWidthBreakpoints : IResponsiveRule<number> = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1380,
  xxxl: 1560,
};

export const getResponsiveRule : IGetResponsiveRule<any> = (viewportWidth, rules) => {
    
    for (let customBreakpoint in rules) {
      if (typeof minWidthBreakpoints[customBreakpoint] === 'number') continue;
      if (!customBreakpoint.includes('px')) continue; // skip invalid breakpoint
      const breakpointWidth = +customBreakpoint.replace('px', '');
      if (isNaN(breakpointWidth)) continue; // skip invalid breakpoint
      minWidthBreakpoints[customBreakpoint] = breakpointWidth;
    }

    const breakpoints = Object.keys(minWidthBreakpoints).sort((a, b) => {
      const widthA = minWidthBreakpoints[a];
      if (typeof widthA !== 'number') return 1;
      const widthB = minWidthBreakpoints[b];
      if (typeof widthB !== 'number') return 1;
      return widthA > widthB ? -1 : 1;
    });

    let currentBreakpoint = 'xs';
    for (let i=0; i<= breakpoints.length; i++) {
      const breakpointCode = breakpoints[i];
      const compareWidth = minWidthBreakpoints[breakpointCode];
      if (typeof compareWidth !== 'number') continue;
      if (viewportWidth >= compareWidth) {
        currentBreakpoint = breakpointCode;
        if (!rules[breakpointCode]) continue;
        break;
      }
    }
    const responsiveRule = rules[currentBreakpoint];
    return responsiveRule;
};

export type TOneBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
const allBreakpoints : Array<TOneBreakpoint> = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

// credit: https://remysharp.com/2010/07/21/throttling-function-calls

// @ts-ignore
function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  // @ts-ignore
  var last, deferTimer;
  return function () {
    // @ts-ignore
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    // @ts-ignore
    if (last && now < last + threshhold) {
      // hold on to it
      // @ts-ignore
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

export const useWindowWidthBreakpoint = (accepts : Array<TOneBreakpoint> = allBreakpoints, forceInitial : any) : TOneBreakpoint => {
  const ruleObject = (() => {
    const allRule : IResponsiveRule<TOneBreakpoint> = {
      xs: 'xs',
      sm: 'sm',
      md: 'md',
      lg: 'lg',
      xl: 'xl',
      xxl: 'xxl',
      xxxl: 'xxxl',
    };
    const obj : IResponsiveRule<TOneBreakpoint> = {};
    accepts.forEach(key => {
      if (!!allRule[key] || key.includes('px')) {
        obj[key] = key;
      }
    });
    return obj;
  })();

  const measureBreakpointFromWidth = () => {
    const currentWindowWidth = Dimensions.get('window').width;
    if (accepts.length === 0) return `c-${currentWindowWidth}`;
    return getResponsiveRule(Dimensions.get('window').width, ruleObject);
  }

  const [breakpoint, getCurrentBreakpoint, setBreakpoint] = useRefState<TOneBreakpoint>(forceInitial || measureBreakpointFromWidth());

  const updateBreakpoint = throttle(() => {
    const newBreakpoint = measureBreakpointFromWidth();
    if (newBreakpoint !== getCurrentBreakpoint()) {
      setBreakpoint(newBreakpoint);
    }
  }, 300, undefined);

  useEffect(() => {
    if (accepts.length === 0) return;
    const unsubcription = Dimensions.addEventListener('change', updateBreakpoint);
    return () => {
      if (typeof Dimensions.removeEventListener === 'function') {
        Dimensions.removeEventListener('change', updateBreakpoint);
      }
      // @ts-ignore
      else if (!!unsubcription && !!unsubcription.remove) {
        // @ts-ignore
        unsubcription.remove();
      }
    };
  }, [accepts]);
  return breakpoint;
};
