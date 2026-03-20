import { Slot } from "expo-router";
import { ThemeProvider } from "@/utils/ThemeContext";
import StatusBarFun from "@/utils/StatusBarFun";

export default function RootLayout() {
  return (
    <ThemeProvider>
      {/* 统一控制状态栏 */}
      <StatusBarFun>
        <Slot />
      </StatusBarFun>
    </ThemeProvider>
  );
}
