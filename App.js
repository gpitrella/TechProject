import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Home from "./src/screens/Home";
import Search from "./src/components/Search";
import Products from "./src/screens/Products";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import ProductDetail from "./src/screens/ProductDetail";
import RootNavigation from "./src/navigation/RootNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    BarlowBold: require("./assets/fonts/Barlow-Bold.ttf"),
    BarlowSemiBold: require("./assets/fonts/Barlow-SemiBold.ttf"),
  });

  if (fontsLoaded === false) {
    return;
  }

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});