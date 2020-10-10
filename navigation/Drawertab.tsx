import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../src/screens/Home';
import SearchScreen from '../src/screens/Search';

const getTabBarIcon = (name: string) => ({
   color,
   size,
}: {
   color: string;
   size: number;
}) => <AntDesign name={name} color={color} size={size} />;

const Drawer = createDrawerNavigator();

const Drawertab = () => {
   return (
      <Drawer.Navigator
         initialRouteName="Home"
         //  screenOptions={{ gestureEnabled: false }}
      >
         <Drawer.Screen
            name="home"
            component={HomeScreen}
            options={{ drawerLabel: 'Home', drawerIcon: getTabBarIcon('home') }}
         />
         <Drawer.Screen
            name="search"
            component={SearchScreen}
            options={{
               drawerLabel: 'Search',
               drawerIcon: getTabBarIcon('search1'),
            }}
         />
      </Drawer.Navigator>
   );
};

export default Drawertab;
