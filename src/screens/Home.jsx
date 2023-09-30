import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import { useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { categories } from "../data/categories";
import CategoryItem from "../components/CategoryItem";
import { colors } from "../theme/colors";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/ecApi";

const Home = ({ navigation }) => {
  
  
  const { data: categories, isLoading, isError, error } = useGetCategoriesQuery();
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.heavyBlue,
      paddingTop: 20,
    },
  });

  return (
    <SafeAreaView style={{ marginBottom: 40, flex: 1, margin: 'auto' }}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        >
          {/* <ActivityIndicator style={{}} size="small" color="#0000ff" /> */}
          <Text> Cargando datos...</Text>
        </View>
      ) : (
        <>
      <Header title="Categorías" navigation={navigation} />
      <View style={styles.container}>
        <FlatList
          data={categories}
          keyExtractor={(key) => key}
          renderItem={({ item }) => (
            <CategoryItem navigation={navigation} item={item} />
          )}
        />
      </View>
      </>
     )}
    </SafeAreaView>
  );
};

export default Home;