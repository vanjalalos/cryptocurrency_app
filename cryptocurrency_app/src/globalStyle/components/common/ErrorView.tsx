import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../colors';

interface IErrorView {
  message: string;
}
const ErrorView: FC<IErrorView> = ({ message }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
      }}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  text: {
    color: colors.error,
    fontSize: 24,
  },
});

export default ErrorView;
