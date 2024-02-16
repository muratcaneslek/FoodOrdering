import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/home";
import ShoppingScreen from "./screens/Shopping";
import { Provider } from "react-redux";
import { store } from "../store";
import { useNetInfo } from "./components/NetInfo/NetInfo";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const MainNavigator = () => {
  const connect = useNetInfo();
  return (
    <Provider store={store}>
      <NavigationContainer>
        {connect ? (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "HomePage") {
                  iconName = focused ? "home" : "home";
                } else if (route.name === "Shopping") {
                  iconName = focused ? "cart-outline" : "cart-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              name="HomePage"
              component={HomeStackScreen}
              options={{ headerTitle: "Pizzas", headerTintColor: "tomato" }}
            />
            <Tab.Screen
              name="Shopping"
              component={ShoppingScreen}
              options={{
                headerTitle: "Pizzas",
                headerTitleStyle: { color: "tomato" },
              }}
            />
          </Tab.Navigator>
        ) : (
          <OfflineScreen />
        )}
      </NavigationContainer>
    </Provider>
  );
};

const OfflineScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 20, color: "red" }}>No internet connection</Text>
  </View>
);

export default MainNavigator;
