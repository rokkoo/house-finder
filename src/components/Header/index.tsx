import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

// https://dribbble.com/shots/12997401-Real-Estate-app

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
   },
   buttonContainer: {
      borderWidth: 1,
      borderColor: '#E2E5EE',
      borderRadius: 12,
      padding: 8,
   },
});

type IconProps = {
   color: string;
   size: number;
   name: string;
   onPress: () => any;
};

const Icon = ({ color, size, name, onPress }: IconProps) => {
   return (
      <View style={styles.buttonContainer}>
         <AntDesign name={name} size={size} color={color} onPress={onPress} />
      </View>
   );
};

const Header = () => {
   const { dispatch } = useNavigation();

   const OpenDrawer = () => {
      dispatch(DrawerActions.toggleDrawer());
   };

   return (
      <View style={styles.container}>
         <Icon name="bars" size={24} color="black" onPress={OpenDrawer} />
         <Icon name="filter" size={24} color="black" onPress={OpenDrawer} />
      </View>
   );
};

export default Header;
