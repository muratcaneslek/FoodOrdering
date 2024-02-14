import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/home';
import ShoppingScreen from './src/screens/Shopping';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Pizzas') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Shopping') {
              iconName = focused ? 'cart-outline' : 'cart-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Pizzas" component={HomeScreen} options={{headerTitleStyle:{color:'tomato'}}}/>
        <Tab.Screen name="Shopping" component={ShoppingScreen} options={{headerTitleStyle:{color:'tomato'}}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}