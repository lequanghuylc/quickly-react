import React, {
  createContext,
  useContext,
  useState,
} from "react";

type TThemeContext = string

const initial : TThemeContext = 'default';

const ThemeContext = createContext<
  [TThemeContext, React.Dispatch<React.SetStateAction<TThemeContext>>]
>([initial, () => {}]);


interface IStyleProviderProps {
  initial?: TThemeContext,
  children?: any,
}

export const ThemeProvider = (props : IStyleProviderProps) => {
  const [theme, setTheme] = useState<TThemeContext>(props.initial || initial);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  return useContext(ThemeContext);
}