import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import { products } from "../data/products";
import Header from "../components/Header";

const ProductDetail = ({ route, navigation }) => {

  const { item } = route.params;

  return (
    <SafeAreaView>
      <Header title="Detalle" navigation={navigation} />
      <Text style={styles.title}> {item.title} </Text>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{
            uri: item.images[2],
          }}
        />
        <Text style={styles.description}> {item.description} </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.price}> Precio: ${item.price} </Text>
        </View>
        <Button
          color="#2D6A4F"
          title="Agregar al carrito"
          style={styles.buttonAdd}
          onPress={() => console.log("Agregar al carrito")}
        />
        <Text style={styles.description}> Rating: {item.rating} </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
  },
  containerImage: {
    alignItems: "center",
    width: '100%',
  },
  title: {
    fontSize: 35,
    fontFamily: "BarlowBold",
    marginTop: 15,
    paddingBottom: 15,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    fontFamily: "BarlowBold",
    marginTop: 0,
    marginBottom: 20
  },
  description: {
    fontSize: 20,
    marginTop: 12,
    marginBottom: 30,
    marginHorizontal: 10,
  },
  buttonAdd: {
    padding: 20,
    borderRadius: 5
  }
});

export default ProductDetail;