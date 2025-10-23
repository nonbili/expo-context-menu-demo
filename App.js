import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, ContextMenu } from "@expo/ui/jetpack-compose";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>A menu below, the trigger button is not displayed</Text>
      <ContextMenu>
        <ContextMenu.Items>
          <Button>Hello</Button>
        </ContextMenu.Items>
        <ContextMenu.Trigger>
          {/* <Button variant="bordered" style={{ width: 150, height: 50 }}>
            Show Menu
            </Button>*/}
          <MaterialIcons.Button name="menu" />
        </ContextMenu.Trigger>
      </ContextMenu>
      {/* <MaterialIcons.Button name="menu" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
