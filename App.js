import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Home from './views/Home';
import Matches from './views/Matches';
import Sync from './views/Sync';
import { useFonts } from 'expo-font';
import Calculate from './views/Calculate';
import Scouting from './views/Scouting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useIsFocused, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
var navigatorOptions = {headerShown : false, tabBarActiveTintColor: 'red', tabBarStyle: { position: 'absolute', backgroundColor:'#1C212C'},
};

export default function App() { 
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Extralight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),

  }); 
  
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={navigatorOptions}>
        
          <Tab.Screen name="Scouting" component={Scouting} options={{tabBarLabel:"Scouting",tabBarIcon: ({ color, size }) => (
            <Ionicons name="clipboard" size={size} color={color} />
          ),} } />
          <Tab.Screen name="Matches" component={Matches} options={{unmountOnBlur:true,tabBarLabel:"Matches",tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" size={size} color={color} />
            ),}}/>
          <Tab.Screen name="Home" component={Home} options={{tabBarLabel:"Home",tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
            ),}}/>
           <Tab.Screen name="Calculate" component={Calculate} options={{tabBarLabel:"Calculate",tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator" size={size} color={color} />
            ),}}/>
          <Tab.Screen name="Sync" component={Sync} options={{tabBarLabel:"Sync",tabBarIcon: ({ color, size }) => (
            <Ionicons name="sync" size={size} color={color} />
            ),}}/>
      </Tab.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
