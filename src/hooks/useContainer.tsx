import React, { useState, useMemo, useRef, useEffect, createContext, useContext, useImperativeHandle, forwardRef } from 'react';
import { TOneBreakpoint, useWindowWidthBreakpoint } from './useWindowWidthBreakpoint';

type TSize = { width: number, height: number }
const initial: TSize = { width: 0, height: 0 };

const ContainerContext = createContext<
    [TSize, React.Dispatch<React.SetStateAction<TSize>>]
>([initial, () => { }]);

interface ISizeProviderProps {
    initial?: TSize,
    setSize?: any,
    children?: any,
}

export const SizeProvider = forwardRef((props: ISizeProviderProps, ref : any) => {
    const [size, setSize] = useState<TSize>(props.initial || initial);
    useImperativeHandle(ref, () => {
        return {
            setSize: (v: any) => setSize(v),
        }
    })
    return (
        <ContainerContext.Provider value={[size, setSize]}>
            {props.children}
        </ContainerContext.Provider>
    );
})

export const useContainerContext = () => {
    return useContext(ContainerContext);
}

export const useContainer = (Component: any, accepts: Array<TOneBreakpoint> = []) => {
    const sizeRef = useRef({ width: 0, height: 0 });
    const [size, setSize] = useState({ width: 0, height: 0 });
    const breakpoint = useWindowWidthBreakpoint(accepts);

    const providerRef = useRef<{ setSize: Function }>();

    useEffect(() => {
        setSize(sizeRef.current);
    }, [breakpoint]);

    useEffect(() => {
        if (providerRef.current && typeof providerRef.current.setSize === 'function') {
            providerRef.current.setSize(size);
        }
    }, [size]);

    const Container = useMemo<any>(() => {
        return (p: any) => {
            return (
                <SizeProvider ref={providerRef}>
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
                </SizeProvider>
            );
        };
    }, []);
    return [Container, size];
}