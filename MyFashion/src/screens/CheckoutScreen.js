// src/screens/CheckoutScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const cartItems = [
  { id: '1', name: 'Office Wear', description: 'Office wear for you office', price: '$120', image: require('../../assets/office_wear.jpg') },
  { id: '2', name: 'Lamerei', description: 'Recycle Boucle Knit Cardigan Pink', price: '$120', image: require('../../assets/lamerei.jpg') },
  { id: '3', name: 'Church Wear', description: 'Recycle Boucle Knit Cardigan Pink', price: '$120', image: require('../../assets/church_wear.jpg') },
];

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.substring(1)), 0);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton}>
        <Text style={styles.removeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHECKOUT</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>EST. TOTAL</Text>
        <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 20,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#f00',
    borderRadius: 15,
    padding: 5,
    marginLeft: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  total: {
    fontSize: 16,
    color: '#888',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
