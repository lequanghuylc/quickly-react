import { useRef, useState } from 'react';

export const useRefState = <T>(initialValue : T) : [T, () => T, (v: T) => void] => {

  const [value, setValue] = useState<T>(initialValue);
  const valueRef = useRef(initialValue);

  const valueInRender = value;
  const getLatestValueToUseInFunction = () => {
    return valueRef.current;
  };
  const setValue2 = (newValue : T) => {
    valueRef.current = newValue;
    setValue(newValue);
  };

  return [
    valueInRender,
    getLatestValueToUseInFunction,
    setValue2,
  ];
}