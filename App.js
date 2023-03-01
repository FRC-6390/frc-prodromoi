import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './views/Home';
import Matches from './views/Matches';
import Sync from './views/Sync';
import Calculate from './views/Calculate';
import Scouting from './views/Scouting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
var navigatorOptions = {headerShown : false, tabBarActiveTintColor: 'red', tabBarStyle: { position: 'absolute', backgroundColor:'#1C212C'},
};

export default function App() {
 
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={navigatorOptions}>
        
          <Tab.Screen name="Scouting" component={Scouting} options={{tabBarLabel:"Scouting",tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard" color={color} size={size} />
          ),}}/>
          <Tab.Screen name="Matches" component={Matches} options={{tabBarLabel:"Matches",tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),}}/>
          <Tab.Screen name="Home" component={Home} options={{tabBarLabel:"Home",tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),}}/>
           <Tab.Screen name="Calculate" component={Calculate} options={{tabBarLabel:"Calculate",tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={size} />
          ),}}/>
          <Tab.Screen name="Sync" component={Sync} options={{tabBarLabel:"Sync",tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sync" color={color} size={size} />
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
