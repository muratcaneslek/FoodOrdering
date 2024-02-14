import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";
import data from "../data/products";

const FoodCard = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../data/defaultPizza.png")}
          onError={(error) =>
            console.log("Görsel yüklenirken hata oluştu:", error)
          }
        />
        <View style={styles.body_container}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.innercontainer}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  return (
    <FlashList
      data={data}
      renderItem={({ item }) => <FoodCard item={item} />}
      estimatedItemSize={200}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#bdbdbd",
    margin: 7,
    marginTop: 12,
    marginBottom: 0,
    backgroundColor: "#f0f0f0f0",
    borderRadius: 20,
  },
  image: {
    maxWidth: "100%",
    aspectRatio: 1,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "white",
    resizeMode: "contain",
  },
  body_container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 5,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 15,
  },
  innercontainer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
  },
  price: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
    color: "black",
    fontStyle: "italic",
  },
});
