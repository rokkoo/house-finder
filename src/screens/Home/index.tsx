import React from 'react';
import { Button, Text } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

import ViewLayout from '../../shared/ViewLayout';
import Header from '../../components/Header';

const HomeScreen = ({ navigation }: DrawerScreenProps<any>) => {
   const onPress = (show: boolean) => {
      console.log('press');

      if (show) {
         return navigation.openDrawer();
      }

      navigation.closeDrawer();
   };

   return (
      <ViewLayout>
         <Header />
         <Text>Home!</Text>
         <Button title="hide nav" onPress={() => onPress(false)} />
         <Button title="show nav" onPress={() => onPress(true)} />
      </ViewLayout>
   );
};

export default HomeScreen;
