import React, { FC } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../../colors';
import { ISearchScreen } from '../../../types/types';

interface ISearchProps {
  item: ISearchScreen;
  onPress: (item: ISearchScreen) => void;
}

const SearchItem: FC<ISearchProps> = ({ item, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={styles.container}>
          <View style={styles.image_container}>
            <Image source={{ uri: item.thumb }} style={styles.image} />
          </View>
          <View style={styles.symbol}>
            <Text> {item.symbol}</Text>
          </View>

          <View style={{ flex: 0.2 }}>
            <Text> {item.name}</Text>
          </View>
          <View style={styles.container_rank}>
            <Text style={styles.label}>
              <Text>Rank# </Text>
              {item.market_cap_rank?.toString()}
            </Text>
          </View>
        </View>

        <View style={styles.border}></View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 6,
  },

  image_container: {
    flex: 0.2,
    justifyContent: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },

  container_flex: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  container_rank: {
    flex: 0.4,
    alignItems: 'flex-end',
  },
  symbol: { flex: 0.2, marginRight: 2, justifyContent: 'flex-start' },
  label: {
    color: colors.primary,
  },
  border: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 0.8,
    width: '100%',
    marginBottom: 12,
  },
});

export default SearchItem;
