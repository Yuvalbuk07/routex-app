import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, LogBox, Platform } from 'react-native';
import AppNavigation from './AppNavigation';

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
        backgroundColor="#FFFFFF" 
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