import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

// אפשור מסכים להתמודדות טובה יותר עם ניווט
enableScreens();

// ייבוא מסכים
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import TravellerTypeScreen from './screens/TravellerTypeScreen';
import TripInfoScreen from './screens/TripInfoScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{
                    headerShown: false, // להסתיר כותרת בכל המסכים
                }}
            >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="TravellerType" component={TravellerTypeScreen} />
                <Stack.Screen name="TripInfo" component={TripInfoScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;