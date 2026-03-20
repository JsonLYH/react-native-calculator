import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type SettingItemProps = {
  isActive: boolean;
  title: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  onPress: () => void;
};
export default function SettingItem({
  isActive,
  title,
  icon,
  onPress,
}: SettingItemProps) {
  return (
    <>
      <View style={styles.wrapBox}>
        <View style={styles.innerLeftBox}>
          <MaterialCommunityIcons name={icon} size={20} />
          <Text style={{ marginLeft: 10 }}>{title}</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons
            color={isActive ? "#125ee8" : "#7ebbff"}
            name={isActive ? "circle" : "circle-outline"}
            size={18}
          ></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  innerLeftBox: {
    flexDirection: "row",
    alignItems: "center",
  },
});
