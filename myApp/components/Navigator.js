import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductList from './ProductList';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Navigator() {
  return (
    
<NavigationContainer>

    <Drawer.Navigator>
<Drawer.Screen name="HomeScreen" component={HomeScreen} />
<Drawer.Screen name="CartScreen" component={CartScreen} />
<Drawer.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
</Drawer.Navigator>

</NavigationContainer>
  );
};

const HomeStack = () => {
  return (
<Stack.Navigator initialRouteName="ProductList">
           <Stack.Screen name="ProductList" component={ProductList} />
           <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
         </Stack.Navigator>
          );
        };