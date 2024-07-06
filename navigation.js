import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import * as React from 'react'; 
import Home from './src/screens/Home';  
import ProductCategory from './src/screens/ProductCategory';
 

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
 
      <Stack.Navigator screenOptions={{headerShown:false}}> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductCatgory" component={ProductCategory} options={{headerShown:true}} />
      </Stack.Navigator>
  
  );
}

export default Navigation;