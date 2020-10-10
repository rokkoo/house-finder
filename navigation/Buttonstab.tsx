import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../src/screens/Home';
import SearchScreen from '../src/screens/Search';

const getTabBarIcon = (name: string) => ({
   color,
   size,
}: {
   color: string;
   size: number;
}) => <AntDesign name={name} color={color} size={size} />;

const Tab = createBottomTabNavigator();

const ButtonsTab = () => {
   return (
      <Tab.Navigator>
         <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home', tabBarIcon: getTabBarIcon('home') }}
         />
         <Tab.Screen
            name="Settings"
            component={SearchScreen}
            options={{ title: 'Home', tabBarIcon: getTabBarIcon('search1') }}
         />
      </Tab.Navigator>
   );
};

export default ButtonsTab;
