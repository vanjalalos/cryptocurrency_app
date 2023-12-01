import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StatusBar } from 'expo-status-bar';
import HomeStack from './src/routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';

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
        <HomeStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
