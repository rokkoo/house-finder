import React from 'react';
import { Button, Text } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

import Header from '../../components/Header';
import ViewLayout from '../../shared/ViewLayout';

const SearchScreen = ({ navigation }: DrawerScreenProps<any>) => {
   const onPress = (show: boolean) => {
      console.log('press');

      if (show) {
         return navigation.openDrawer();
      }

      navigation.closeDrawer();

      // navigation.setOptions({ tabBarVisible: show });
   };

   return (
      <ViewLayout>
         <Header />
         <Text>SearchScreen!</Text>
         <Button title="hide nav" onPress={() => onPress(false)} />
         <Button title="show nav" onPress={() => onPress(true)} />
      </ViewLayout>
   );
};

export default SearchScreen;
