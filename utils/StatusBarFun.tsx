import { ReactNode, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import { ThemeContext } from "@/utils/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function StatusBarFun({ children }: { children: ReactNode }) {
  const [isInit, setIsInit] = useState(false);
  const { currentTheme, toogleTheme, isSytem, toogleSystemTheme } =
    useContext(ThemeContext);
  const colorScheme: ColorSchemeName = useColorScheme();
  useEffect(() => {
    if (!isInit) {
      // 初始化时，获取持久化的系统主题
      AsyncStorage.getItem("theme_system").then((value) => {
        if (value) {
          // 根据持久化的系统主题设置状态栏样式
          toogleSystemTheme(value === "true");
        } else {
          toogleSystemTheme(false);
        }
        // 初始化时，获取持久化的主题
        AsyncStorage.getItem("theme_store").then((value) => {
          if (value) {
            toogleTheme((isSytem ? colorScheme : value) as string);
          }
        });
      });
      setIsInit(true);
    }
    AsyncStorage.getItem("theme_system").then((value) => {
      let bool = Boolean(value);
      // 如果开启了跟随系统主题变化
      if (bool || isSytem) {
        toogleTheme(colorScheme as string);
      }
    });
  }, [colorScheme]);
  return (
    <>
      {/* 统一ios端与android的状态栏背景色、文字颜色 */}
      <StatusBar style={currentTheme === "dark" ? "light" : "dark"}></StatusBar>
      {children}
    </>
  );
}
