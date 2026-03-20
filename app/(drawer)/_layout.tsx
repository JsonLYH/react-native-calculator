import { Drawer } from "expo-router/drawer";
import { useContext } from "react";
import { Colors } from "@/utils/Colors";
import { ThemeContext } from "@/utils/ThemeContext";
export default function Layout() {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <Drawer
      screenOptions={{
        headerTintColor: "#0089ff",
      }}
    >
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Home",
          // 统一ios与android的左上角icon样式
          headerTitleStyle: {
            color: currentTheme === "dark" ? Colors.light : Colors.dark,
          },
          headerStyle: {
            backgroundColor:
              currentTheme === "dark" ? Colors.dark : Colors.light,
          },
        }}
      />
      <Drawer.Screen
        name="settings" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Settings",
          title: "Setting",
          headerTitleStyle: {
            color: currentTheme === "dark" ? Colors.light : Colors.dark,
          },
          headerStyle: {
            backgroundColor:
              currentTheme === "dark" ? Colors.dark : Colors.light,
          },
        }}
      />
    </Drawer>
  );
}
