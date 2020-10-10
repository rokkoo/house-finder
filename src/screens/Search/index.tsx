import React from 'react';
import { Button, Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

const SearchScreen = ({ navigation }: BottomTabScreenProps<any>) => {
   const onPress = (show: boolean) => {
      console.log('press');

      navigation.setOptions({ tabBarVisible: show });
   };

   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>SearchScreen!</Text>
         <Button title="hide nav" onPress={() => onPress(false)} />
         <Button title="show nav" onPress={() => onPress(true)} />
      </View>
   );
};

export default SearchScreen;
