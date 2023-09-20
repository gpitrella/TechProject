import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { useWindowDimensions } from "react-native";
import { Dimensions } from "react-native";

const ProductItem = ({ item, navigation }) => {

  const { height, width } = useWindowDimensions();
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      marginVertical: 10,
      backgroundColor: '#fff',
      borderColor: colors.heavyBlue,
      borderRadius: 10,
      borderWidth: 2,
      height: 100,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      fontSize: 20,
      fontWeight: "900",
      marginLeft: 20,
      textTransform: "capitalize",
    },
    image: {
      marginRight: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("productDetail", { item: item })}>
        <Text style={styles.text}>
          {item.title}
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("productDetail", { item: item })}>
      <Image
        style={styles.image}
        height={80}
        width={80}
        source={{ uri: item.images[0] }}
        resizeMode="cover"
      />
      </Pressable>
    </View>
  );
};



export default ProductItem;