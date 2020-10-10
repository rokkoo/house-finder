import React from 'react';
import { Button, Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';

const HomeScreen = ({ navigation }: DrawerScreenProps<any>) => {
   const onPress = (show: boolean) => {
      console.log('press');

      if (show) {
         return navigation.openDrawer();
      }

      navigation.closeDrawer();

      // navigation.setOptions({ tabBarVisible: show });
   };

   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Home!</Text>
         <Button title="hide nav" onPress={() => onPress(false)} />
         <Button title="show nav" onPress={() => onPress(true)} />
      </View>
   );
};

export default HomeScreen;
