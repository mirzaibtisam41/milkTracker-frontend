import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
// Screens
import SplashScreen from './src/Screens/Splash';
import HomeScreen from './src/Screens/Home';
import DetailsScreen from './src/Screens/Details';
import EditScreen from './src/Screens/Edit';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={DetailsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
