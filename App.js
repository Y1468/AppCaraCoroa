
import * as React from 'react';
import { Text, View,StyleShite } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Telajogo from './components/telaJogo';
import Telaconfig from './components/telaConfig';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Jogo">
        <Tab.Screen 
        name="Jogo"
        component={Telajogo}
         options={{
         title:"Jogo",
         }}
         />
        
        <Tab.Screen
         name="Comfigurações" 
         component={Telaconfig}
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
}