import { FlatList, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import { colors } from "../theme/colors";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../services/ecApi";

const Products = ({ route, navigation }) => {
  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState(null);
  const { item } = route.params;
  
  const products = useSelector((state) => state.homeSlice.allProducts);
  
  const { data, isLoading, isError } = useGetProductsQuery();

  
  const productsFilterByCategory = useSelector(
    (state) => state.homeSlice.productsFilterByCategory
  );
 
  useEffect(() => {
    // const categoryProducts = products.filter((el) => el.category === item);
    setCategoryProd(productsFilterByCategory);

    if (text) {
      const titleProduct = products.filter((el) => el.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
      setCategoryProd(titleProduct);
    }
  }, [text, item]);

  return (
    <SafeAreaView>
      <Header title={item} navigation={navigation} />

      <Search text={text} setText={setText} />

      <FlatList
        data={categoryProd}
        keyExtractor={products.id}
        renderItem={({ item }) => (
          <ProductItem navigation={navigation} item={item} />
        )}
      />
    </SafeAreaView>
  );
};

export default Products;