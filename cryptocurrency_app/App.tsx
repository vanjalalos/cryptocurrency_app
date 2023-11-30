import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import HomeStack from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
//import useCryptocurrency from './hooks/useCryptocurrency';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style='auto' />
      <NavigationContainer>
        {/* <MainScreen /> */}
        <HomeStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
