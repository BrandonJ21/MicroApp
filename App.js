import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/navigation/Stack";
import { AuthProvider, HistorialProvider } from "./src/context";

const AppState = ({ children }) => {
  return (
    <AuthProvider>
      <HistorialProvider>{children}</HistorialProvider>
    </AuthProvider>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigation />
      </AppState>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
