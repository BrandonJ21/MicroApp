import { StyleSheet, View } from "react-native";
import { Inicio } from "./src/page/Inicio";
import { Login } from "./src/page/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
