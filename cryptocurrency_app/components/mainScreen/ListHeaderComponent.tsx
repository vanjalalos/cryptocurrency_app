import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListHeaderComponent: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header_item}>
        <Text>Name</Text>
      </View>
      <View style={styles.header_item}>
        <Text>Symbol</Text>
      </View>
      <View style={styles.header_item}>
        <Text>Current</Text>
        <Text>($)</Text>
      </View>
      <View style={styles.header_item}>
        <Text>Market cap </Text>
      </View>
      <View style={styles.header_item}>
        <Text>(%)24</Text>
        {/* <Text>24h</Text> */}
      </View>
      <View style={styles.header_item}>
        <Text>(%)7day</Text>
        {/* <Text>7day</Text> */}
      </View>
    </View>
    // <View>
    //   <View style={styles.sectionHeader}>
    //     <Text style={styles.sectionTitle}>Me</Text>
    //   </View>

    //   <View style={styles.personRow}>
    //     <View style={styles.personNameContainer}>
    //       <Text style={styles.personName}>Jim</Text>
    //       <Text style={styles.personBoldName}>{' Hopper'}</Text>
    //     </View>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginBottom: 20, marginLeft: 12 },
  header_item: { flex: 1 },
  sectionHeader: {
    height: 30,
    paddingLeft: 25,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  sectionTitle: {
    fontWeight: '800',
    color: 'blue',
    fontSize: 20,
  },

  personRow: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  personNameContainer: {
    left: 25,
    position: 'absolute',
    flexDirection: 'row',
  },

  personName: {
    fontWeight: '400',
    fontSize: 18,
  },

  personBoldName: {
    fontWeight: '700',
    fontSize: 18,
  },

  separator: {
    height: 0.5,
    backgroundColor: '#F2F2F2',
    left: 25,
  },
});
export default ListHeaderComponent;
