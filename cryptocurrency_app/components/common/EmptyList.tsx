import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../globalStyle/colors';

const EmptyListComponent: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No data found</Text>
    </View>
  );
};

export default EmptyListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.textLabel,
    textAlign: 'center',
    fontSize: 24,
  },
});
