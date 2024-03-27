import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionScreen from './views/Transaction_screen';
import SummaryScreen from './views/Summery_page';
import Screens from './Utils/screen_names';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#189AB4',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ color, size }) => {
            let iconComponent;

            if (route.name === Screens.transactions) {
              iconComponent = <FontAwesome6 name="cash-register" size={size} color={color} />
            } else if (route.name === Screens.summary) {
              iconComponent = <FontAwesome6 name="file-invoice-dollar" size={size} color={color} />
            }

            return iconComponent;
          },
        })}
      >

        <Tab.Screen name={Screens.transactions} component={TransactionScreen} options={{ headerShown: false }}/>

        <Tab.Screen name={Screens.summary} component={SummaryScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}