import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { FlashList } from "@shopify/flash-list";

const ShoppingCart = ({ item }) => {
  return (
    <View>
      <Text>{item.product.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
    </View>
  );
};

const Shopping = () => {
  const cartItems = useSelector((state) => state.shopping.items);

  return (
    <FlashList
      data={cartItems}
      estimatedItemSize={200}
      renderItem={({ item }) => <ShoppingCart item={item} />}
    />
  );
};

export default Shopping;
