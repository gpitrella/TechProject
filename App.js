import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import TabNav from "./src/navigation/TabNav";
import { store } from "./src/redux/store.jsx";

export default function App() {
  const [fontsLoaded] = useFonts({
    BarlowBold: require("./assets/fonts/Barlow-Bold.ttf"),
    BarlowSemiBold: require("./assets/fonts/Barlow-SemiBold.ttf"),
  });

  if (fontsLoaded === false) {
    return;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});