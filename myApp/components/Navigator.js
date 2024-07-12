import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    
<NavigationContainer>

    <Drawer.Navigator>
<Drawer.Screen name="HomeScreen" component={HomeScreen} />
<Drawer.Screen name="CartScreen" component={CartScreen} />
<Drawer.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
</Drawer.Navigator>

</NavigationContainer>

  )
}