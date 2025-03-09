import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, LogBox, Platform, I18nManager } from 'react-native';
import AppNavigation from './src/navigation/AppNavigator';

// הגדרת תמיכה ב-RTL (תצוגה מימין לשמאל) לתמיכה בעברית
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

// התעלמות מאזהרות ספציפיות בסביבת הפיתוח
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

/**
 * קומפוננטה ראשית של האפליקציה
 * מגדירה את המיכל הבסיסי ומנהלת את ה-StatusBar
 */
const App = () => {
  // פעולות אתחול בטעינת האפליקציה
  useEffect(() => {
    // מקום להוסיף לוגיקת אתחול
  }, []);

  return (
    <>
      <StatusBar 
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} 
        backgroundColor="#3498db" 
        translucent={false}
      />
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
    </>
  );
};

// סגנונות
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;