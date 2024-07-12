import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Text style={styles.sectionTitle}>MATERIALS</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/Do Not Bleach.png')} style={styles.icon} />
        <Text>Do not use bleach</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/donttumbledry.png')} style={styles.icon} />
        <Text>Do not tumble dry</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/Do Not Wash.png')} style={styles.icon} />
        <Text>Dry clean with tetrachloroethylene</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/Iron Low Temperature.png')} style={styles.icon} />
        <Text>Iron at a maximum of 110°C/230°F</Text>
      </View>
      <View style={styles.shippingContainer}>
        <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
        <Text>Estimated to be delivered on 09/11/2021 - 12/11/2021</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#e74c3c',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productDescription: {
    fontSize: 16,
    marginVertical: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  shippingContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  shippingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;