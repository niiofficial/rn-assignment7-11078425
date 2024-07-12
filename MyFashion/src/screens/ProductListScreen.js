// src/screens/ProductListScreen.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: '1', name: 'Office Wear', price: '$120', image: require('../../assets/dress1.png') },
  { id: '2', name: 'Black', price: '$120', image: require('../../assets/dress2.png') },
  { id: '3', name: 'Church Wear', price: '$120', image: require('../../assets/dress3.png') },
  { id: '4', name: 'Lamerei', price: '$120', image: require('../../assets/dress4.png') },
  { id: '5', name: '21WN', price: '$120', image: require('../../assets/dress5.png') },
  { id: '6', name: 'Lopo', price: '$120', image: require('../../assets/dress6.png') },
  { id: '7', name: 'Lane', price: '$120', image: require('../../assets/dress7.png') },
];

const ProductListScreen = ({ route }) => {
  const { category } = route.params;
  const navigation = useNavigation();

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
      
        </TouchableOpacity>
        <Image source={require('../../assets/Logo.png')} style={styles.logo} />
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image source={require('../../assets/Search.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/shoppingBag.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{category}</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/Listview.png')} style={styles.listviewIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Checkout')}
        style={styles.checkoutButton}
      >
        <Text style={styles.checkoutButtonText}>Go to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  menuButton: {
    paddingRight: 15,
  },
  logo: {
    flex: 1,
    width: 100,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  listviewIcon: {
    width: 24,
    height: 24,
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
    alignSelf: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProductListScreen;
