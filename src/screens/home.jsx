import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";
import data from "../data/products";
import ModalContent from "../components/ModalContent/ModalContent";

const FoodCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          onError={(error) =>
            console.log("Görsel yüklenirken hata oluştu:", error)
          }
        />
        <View style={styles.body_container}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.innercontainer}>
            <Text style={styles.price}>{item.price} $</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItem = (id) => {
    setSelectedItemId(id);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlashList
        data={data}
        renderItem={({ item }) => (
          <FoodCard item={item} onPress={() => handleItem(item.id)} />
        )}
        estimatedItemSize={200}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />

      <ModalContent
        itemId={selectedItemId}
        onClose={closeModal}
        visible={modalVisible}
      />
    </View>
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
    minHeight: 295,
    marginBottom: 0,
    backgroundColor: "#f0f0f0f0",
    borderRadius: 20,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    aspectRatio: 1,
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
