import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/home';
import ShoppingScreen from './src/screens/Shopping';
import { Provider } from 'react-redux';
import { store } from './store'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomePage') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Shopping') {
              iconName = focused ? 'cart-outline' : 'cart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
         <Tab.Screen name="HomePage" component={HomeStackScreen} options={{ headerTitle: 'Pizzas', headerTintColor: 'tomato' }} />
        <Tab.Screen name="Shopping" component={ShoppingScreen} options={{headerTitle: 'Pizzas',headerTitleStyle:{color:'tomato'}}}/>
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}