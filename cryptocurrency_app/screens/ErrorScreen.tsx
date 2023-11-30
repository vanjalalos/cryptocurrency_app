import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface IErrorProps {
  resetError: () => void;
}

const ErrorScreen: React.FC<IErrorProps> = ({ resetError }) => {
  return (
    <View style={styles.flexCenter}>
      <View style={styles.flexCenter}>
        <Text style={styles.errorText}>Error...</Text>
      </View>
      <Button color={'darkslateblue'} onPress={resetError} title='Go home' />
    </View>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 24,
  },
});
