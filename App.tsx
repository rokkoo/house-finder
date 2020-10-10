import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ButtonsTab from './navigation/Buttonstab';
import Drawertab from './navigation/Drawertab';

export default function App() {
   return (
      <NavigationContainer>
         <Drawertab />
         {/* <ButtonsTab /> */}
      </NavigationContainer>
   );
}
