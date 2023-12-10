import { StyleSheet, View } from "react-native";
import { AuthProvider } from "./src/context/auth/AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/navigation/Stack";

const AppState = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
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
