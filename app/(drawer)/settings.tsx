import { StyleSheet, Text, View, Switch } from "react-native";
import { Stack } from "expo-router";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "@/utils/ThemeContext";
import SettingItem from "@/Components/SettingItem";
const Settings = () => {
  const { toogleTheme, currentTheme, isSytem, toogleSystemTheme } =
    useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    toogleTheme(isEnabled ? "light" : "dark");
  };
  useEffect(() => {
    setIsEnabled(currentTheme === "dark");
  }, [currentTheme]);
  return (
    <>
      {/* <Stack.Screen options={{ title: "Setting" }} /> */}
      <View style={styles.container}>
        <Text>Theme Switch</Text>
        <View style={styles.switchBox}>
          <Text>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#2752dd" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text>Theme Settings</Text>
        <View style={styles.settingList}>
          <SettingItem
            icon="lightbulb-on"
            onPress={() => {}}
            isActive={currentTheme === "light"}
            title="Light"
          />
          <SettingItem
            onPress={() => {}}
            icon="weather-night"
            isActive={currentTheme === "dark"}
            title="Dark"
          />
          <SettingItem
            onPress={() => {
              isSytem ? toogleSystemTheme(false) : toogleSystemTheme(true);
            }}
            icon="theme-light-dark"
            isActive={isSytem}
            title="System"
          />
        </View>
      </View>
    </>
  );
};
export default Settings;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  switchBox: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  settingList: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    gap: 15,
  },
});
