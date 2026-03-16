import { StyleSheet, Text, View } from 'react-native'
import { Stack } from "expo-router";

const Settings = () => { 
    return (
        <>
            <Stack.Screen options={{ title: "Setting" }} />
            <View>
                <Text>Settings</Text>
            </View>
        </>
    );
}
export default Settings

const styles = StyleSheet.create({})