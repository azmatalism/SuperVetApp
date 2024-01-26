import React, { } from 'react';
import { COLORS, Styles } from './src/constants/Theme';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import IntroScreen from './src/screens/intro/IntroScreen';




function App(): JSX.Element {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar backgroundColor={COLORS.background} barStyle='light-content' />
      <NavigationContainer>

        <DrawerNavigator/>

      </NavigationContainer>
      {/* <IntroScreen/> */}
    </SafeAreaView>
  );
}
export default App;
