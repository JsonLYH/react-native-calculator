import { createContext, ReactNode, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export type ThemeContextType = {
  currentTheme: string;
  isSytem: boolean;
  toogleSystemTheme: (bool: boolean) => void;
  toogleTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "light",
  isSytem: false,
  toogleSystemTheme: () => {},
  toogleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<string>("light");
  const [isSytem, setIsSystem] = useState<boolean>(false);
  const toogleTheme = (theme: string) => {
    if (theme) {
      AsyncStorage.setItem("theme_store", theme);
    }
    setCurrentTheme(theme);
  };
  const toogleSystemTheme = (bool: boolean) => {
    setIsSystem(bool);
    AsyncStorage.setItem("theme_system", bool ? "true" : "false");
  };
  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        isSytem,
        toogleTheme,
        toogleSystemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
