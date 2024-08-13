import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useWindowWidthBreakpoint } from './useWindowWidthBreakpoint';

export const useContainer = (Component : any, accepts : any) => {
    const sizeRef = useRef({ width: 0, height: 0 });
    const [size, setSize] = useState({ width: 0, height: 0 });
    const breakpoint = useWindowWidthBreakpoint(accepts);

    useEffect(() => {
        setSize(sizeRef.current);
    }, [breakpoint]);

    const Container = useMemo(() => {
        return (p : any) => {
            return (
                <Component
                    {...p}
                    onLayout={(e : any) => {
                        const { width, height } = e.nativeEvent.layout;
                        sizeRef.current = { width, height };
                    }}
                />
            );
        };
    }, []);
    return { Container, size };
}