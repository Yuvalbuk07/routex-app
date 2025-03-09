import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import AppNavigation from './AppNavigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;