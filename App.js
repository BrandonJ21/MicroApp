import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// import { Login } from "./src/page/Login";
import { Inicio } from "./src/page/Inicio";

export default function App() {
  return (
    <View style={styles.container}>
      <Inicio />
       {/* <StatusBar style="dark" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
