import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import rootNav from './navigation/rootNav';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './styles/theme';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <rootNav />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
