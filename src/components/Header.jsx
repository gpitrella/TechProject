import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import GoBack from "./GoBack";

const Header = ({ title, navigation }) => {

  const styles = StyleSheet.create({
    container: {
      height: 120,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.white,
      paddingTop: 35,
    },
    headerText: {
      fontSize: 35,
      marginLeft: 15,
      color: colors.heavyBlue,
      textTransform: "capitalize",
      fontFamily: "BarlowBold",
    },
  });

  return (
    <View style={styles.container}>
      <GoBack navigation={navigation}/>
      <Text style={styles.headerText}> {title} </Text>
    </View>
  );
};

export default Header;