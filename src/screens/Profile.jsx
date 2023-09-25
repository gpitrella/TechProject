import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const Profile = ({ navigation }) => {

const styles = StyleSheet.create({
    imagen: {
        width: 170,
        height: 170,
        borderRadius: 100,
        marginTop: 10,
    },
    containerButton: {
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        color: "white",
    },
    containerIcon: {
        borderWidth: 2,
        padding: 5,
        borderRadius: 8,
        borderColor: colors.heavyBlue,
        backgroundColor: '#fff',
    },
    textButton: {
        marginLeft: 15,
        fontFamily: "BarlowSemiBold",
        fontSize: 20,
    },
    });

  return (
    <View>
      <Header title="Mi Perfil" navigation={navigation}/>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Image
          style={styles.imagen}
          source={{
            uri: "https://img.freepik.com/premium-vector/cute-smiling-boy-avatar-flat-style-vector-illustration_710508-2334.jpg?w=2000",
          }}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.containerButton}>
            <Pressable
              style={styles.containerIcon}
              onPress={() => console.log("Abrir la Camara..")}
            >
              <Entypo name="camera" size={24} color={ colors.heavyBlue } />
            </Pressable>
            <Text style={styles.textButton}>Abrir Cámara</Text>
          </View>
          <View style={styles.containerButton}>
            <Pressable
              style={styles.containerIcon}
              onPress={() => console.log("Abrir Galería de fotos..")}
            >
              <FontAwesome name="photo" size={24} color={ colors.heavyBlue } />
            </Pressable>
            <Text style={styles.textButton}>Abrir Galería de fotos</Text>
          </View>
          <View style={styles.containerButton}>
            <Pressable
              style={styles.containerIcon}
              onPress={() => console.log("Abrir Mapa..")}
            >
              <Feather name="map" size={24} color={ colors.heavyBlue } />
            </Pressable>
            <Text style={styles.textButton}>Abrir Mapa</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;