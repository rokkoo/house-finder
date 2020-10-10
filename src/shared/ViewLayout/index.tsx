import React from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
      marginTop: Platform.OS === 'android' ? 28 : 0,
      marginHorizontal: 20,
   },
});

const ViewLayout: React.FC = ({ children }) => {
   return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default ViewLayout;
