import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, ROUTES } from '../constants';

// ייבוא מסכים
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import HomeScreen from '../screens/Home';
import TravellerTypeScreen from '../screens/TravellerType';

// יצירת ניווטים
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// מסך זמני לשימוש בטאבים שעדיין לא מומשו
const PlaceholderScreen = ({ route }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 18, textAlign: 'center' }}>
      מסך {route.name} בפיתוח
    </Text>
  </View>
);

// אייקון עבור טאב בר
const TabIcon = ({ name, focused }) => {
  return (
    <View style={[
      styles.iconContainer,
      focused ? styles.iconFocused : {}
    ]}>
      <Text style={[
        styles.iconText,
        focused ? styles.iconTextFocused : {}
      ]}>
        {name}
      </Text>
    </View>
  );
};

// ניווט טאב עבור המסכים הראשיים
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.GRAY,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'דף בית',
          tabBarIcon: ({ focused }) => <TabIcon name="🏠" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="SavedRoutes"
        component={PlaceholderScreen} // בהמשך נחליף זה עם מסך אמיתי
        options={{
          tabBarLabel: 'מסלולים',
          tabBarIcon: ({ focused }) => <TabIcon name="🗺️" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={PlaceholderScreen} // בהמשך נחליף זה עם מסך אמיתי
        options={{
          tabBarLabel: 'פרופיל',
          tabBarIcon: ({ focused }) => <TabIcon name="👤" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

// ניווט ראשי
const AppNavigator = () => {
  // הערה: בהמשך נעדכן לפי מצב התחברות משתמש
  const isAuthenticated = false;
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!isAuthenticated ? (
        // מסכי משתמש לא מחובר
        <>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="TravellerType" component={TravellerTypeScreen} />
          {/* מסך הבית יהיה זמין גם למשתמשים לא מחוברים במצב אורח */}
          <Stack.Screen name="Main" component={MainTabNavigator} />
        </>
      ) : (
        // מסכי משתמש מחובר
        <>
          <Stack.Screen name="Main" component={MainTabNavigator} />
          <Stack.Screen
            name="TravellerType"
            component={TravellerTypeScreen}
            options={{
              headerShown: true,
              title: 'סוג מטייל',
              headerTitleStyle: {
                fontSize: 18,
                fontWeight: 'bold',
              },
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconFocused: {
    transform: [{ scale: 1.2 }],
  },
  iconText: {
    fontSize: 18,
  },
  iconTextFocused: {
    fontWeight: 'bold',
  },
});

export default AppNavigator;