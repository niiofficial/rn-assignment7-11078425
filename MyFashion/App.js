import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import ProductListScreen from './src/screens/ProductListScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Open Fashion' }} />
        <Drawer.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Products' }} />
        <Drawer.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Detail' }} />
        <Drawer.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
