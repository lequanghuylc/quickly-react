import React, { useState, useMemo, useRef, useEffect } from 'react';
import { TOneBreakpoint, useWindowWidthBreakpoint } from './useWindowWidthBreakpoint';

export const useContainer = (Component: any, accepts: Array<TOneBreakpoint> = []) => {
    const sizeRef = useRef({ width: 0, height: 0 });
    const [size, setSize] = useState({ width: 0, height: 0 });
    const breakpoint = useWindowWidthBreakpoint(accepts);

    useEffect(() => {
        setSize(sizeRef.current);
    }, [breakpoint]);

    const Container = useMemo<any>(() => {
        return (p: any) => {
            return (
                <Component
                    {...p}
                    onLayout={(e: any) => {
                        const { width, height } = e.nativeEvent.layout;
                        const isFirstTime = sizeRef.current.width === 0 && sizeRef.current.height === 0;
                        sizeRef.current = { width, height };
                        if (isFirstTime) {
                            setSize(sizeRef.current);
                        }
                    }}
                />
            );
        };
    }, []);
    return [Container, size];
}