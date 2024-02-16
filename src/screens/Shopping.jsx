import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FlashList } from "@shopify/flash-list";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { changeQuantity, selectSubtotal } from "../Redux/shopping-slice";
import { LinearGradient } from "expo-linear-gradient";

const FooterComp = () => {
  const total = useSelector(selectSubtotal);
  const sum = total + 10;
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerInnerContainer}>
        <Text style={styles.footerTextTotal}>Subtotal : </Text>
        <Text style={styles.footerTextTotal}>{total} $</Text>
      </View>
      <View style={styles.footerInnerContainer}>
        <Text style={styles.footerTextTotal}>Delivery : </Text>
        <Text style={styles.footerTextTotal}>10 $</Text>
      </View>
      <View style={styles.footerInnerContainer}>
        <Text style={styles.footerTextTotal}>Total : </Text>
        <Text style={styles.footerTextTotal}>{sum} $</Text>
      </View>
      <View style={styles.paymentContainer}>
        <TouchableOpacity
          style={styles.paymentButtonContainer}
          onPress={() => console.log("checkout")}
        >
          <Text style={styles.paymentText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ShoppingCart = ({ item }) => {
  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    dispatch(changeQuantity({ productId: item.product.id, amount: -1 }));
  };

  const increaseQuantity = () => {
    dispatch(changeQuantity({ productId: item.product.id, amount: 1 }));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.product.image }} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.name}>{item.product.name}</Text>

        <View style={styles.footer}>
          <Icon
            name="minus-circle-outline"
            style={styles.icon}
            size={23}
            onPress={decreaseQuantity}
          />

          <Text style={styles.quantity}>{item.quantity}</Text>

          <Icon
            name="plus-circle-outline"
            style={styles.icon}
            size={23}
            onPress={increaseQuantity}
          />

          <Text style={styles.itemTotal}>
            {" "}
            $ {item.product.price * item.quantity}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Shopping = () => {
  const cartItems = useSelector((state) => state.shopping.items);

  return (
    <>
      <LinearGradient
        colors={["#FFA500", "#FFB600", "#FFD700"]}
        style={{ flex: 1 }}
      >
        {cartItems.length === 0 ? (
          <View style={styles.emptyCartContainer}>
            <Text style={styles.emptyCartText}>
              Sepetiniz boş. Lütfen ürün ekleyin.
            </Text>
          </View>
        ) : (
          <FlashList
            data={cartItems}
            estimatedItemSize={200}
            renderItem={({ item }) => <ShoppingCart item={item} />}
            ListFooterComponent={FooterComp}
          />
        )}
      </LinearGradient>
    </>
  );
};

export default Shopping;

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 20,
    color: "black",
  },
  container: {
    margin: 10,
    marginBottom: 0,
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#f6dbc6",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: "45%",
    aspectRatio: 1,
    borderRadius: 10,
    resizeMode: "contain",
    backgroundColor: "#fff",
  },
  name: {
    fontWeight: "500",
    fontSize: 18,
    color: "black",
  },
  icon: {
    color: "black",
  },
  size: {
    fontSize: 16,
    color: "gray",
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "black",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
    color: "black",
    fontStyle: "italic",
  },
  footerContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "black",
    borderTopWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
  },
  footerInnerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 5,
  },
  footerTextTotal: {
    fontSize: 19,
    marginLeft: 10,
  },
  paymentContainer: {
    borderBottomWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
    margin: 10,
    paddingBottom: 7,
  },
  paymentButtonContainer: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
  },
  paymentText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    padding: 10,
  },
});
