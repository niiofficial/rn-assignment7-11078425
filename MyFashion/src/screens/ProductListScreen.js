// src/screens/ProductListScreen.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: '1', name: 'Office Wear', price: '$120', image: require('../../assets/office_wear.jpg') },
  { id: '2', name: 'Black', price: '$120', image: require('../../assets/black.jpg') },
  { id: '3', name: 'Church Wear', price: '$120', image: require('../../assets/church_wear.jpg') },
  { id: '4', name: 'Lamerei', price: '$120', image: require('../../assets/lamerei.jpg') },
  { id: '5', name: '21WN', price: '$120', image: require('../../assets/21wn.jpg') },
  { id: '6', name: 'Lopo', price: '$120', image: require('../../assets/lopo.jpg') },
  { id: '7', name: 'Lane', price: '$120', image: require('../../assets/lane.jpg') },
];

const ProductListScreen = ({ route }) => {
  const { category } = route.params;
  const navigation = useNavigation();

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Button
        title="View Details"
        onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      <Button
        title="Go to Checkout"
        onPress={() => navigation.navigate('Checkout')}
        style={styles.checkoutButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  productContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default ProductListScreen;
