// src/utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCartItems = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@cart_items');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error reading cart items from storage:', e);
  }
};

export const addCartItem = async (item) => {
  try {
    const currentCart = await getCartItems();
    const updatedCart = [...currentCart, item];
    await AsyncStorage.setItem('@cart_items', JSON.stringify(updatedCart));
  } catch (e) {
    console.error('Error adding item to cart:', e);
  }
};

export const removeCartItem = async (itemId) => {
  try {
    const currentCart = await getCartItems();
    const updatedCart = currentCart.filter(item => item.id !== itemId);
    await AsyncStorage.setItem('@cart_items', JSON.stringify(updatedCart));
  } catch (e) {
    console.error('Error removing item from cart:', e);
  }
};
