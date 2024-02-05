import { COLORS, Styles } from './src/constants/Theme';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';

function App(): JSX.Element {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar backgroundColor={COLORS.background} barStyle='light-content' />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
export default App;
