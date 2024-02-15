import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import data from "../../data/products";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../Redux/shopping-slice";

const deviceSize = Dimensions.get("window");

const ModalContent = ({ itemId, onClose, visible }) => {
  const useData = data.find((item) => item.id === itemId);
  const dispach = useDispatch();

  const handleAddToCard = () => {
    dispach(addCartItem({ product: useData }));
  };

  if (!useData) {
    return (
      <Modal
        style={styles.modal}
        isVisible={visible}
        onSwipeComplete={onClose}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
      >
        <View style={styles.container}>
          <Text>Error: Item not found</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <Image source={{ uri: useData.image }} style={styles.image} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{useData.name}</Text>
          <Text style={styles.price}>{useData.price} $</Text>
        </View>
        <TouchableOpacity
          style={styles.addToCard}
          onPress={() => handleAddToCard()}
        >
          <Text style={styles.addToCardText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalContent;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  container: {
    margin: 10,
    marginBottom: 0,
    justifyContent: "flex-end",
    borderRadius: 20,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: deviceSize.height / 3,
    resizeMode: "contain",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  body_container: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "black",
    marginBottom: 10,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
    color: "black",
  },
  closeButton: {
    backgroundColor: "red",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 10,
    padding: 10,
    alignSelf: "flex-end",
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  addToCard: {
    margin: 5,
    marginBottom: 10,
    alignItems: "center",
    borderTopWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  addToCardText: {
    fontWeight: "bold",
    color: "tomato",
    fontSize: 15,
  },
});
