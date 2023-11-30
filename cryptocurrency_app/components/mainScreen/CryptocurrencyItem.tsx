import React, { FC } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../globalStyle/colors';
import formattingPercentage from '../../helpers/formattingPercentage';
import { ICryptocurrencyItem } from '../../types/types';

interface CryptoCurrencyItemProps {
  item: ICryptocurrencyItem;
  onPress: (item: ICryptocurrencyItem) => void;
}

const CryptocurrencyItem: FC<CryptoCurrencyItemProps> = ({ item, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={styles.container}>
          <View style={{ flex: 0.1, justifyContent: 'center' }}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
          <View
            style={{ flex: 0.1, marginRight: 4, justifyContent: 'flex-start' }}>
            <Text> {item.symbol}</Text>
          </View>

          <View style={{ flex: 0.2 }}>
            <Text> {item.name}</Text>
          </View>
          <View
            style={{
              flex: 0.6,
              alignItems: 'flex-end',
            }}>
            <Text>
              <Text style={styles.label}>Market cap</Text>{' '}
              {item.market_cap.toString()}
            </Text>
          </View>
        </View>
        <View style={styles.price_container}>
          <View>
            <Text>
              <Text style={styles.label}>Current(%) </Text>
              {item.current_price.toString()}
            </Text>
          </View>
          <View>
            <Text
              style={
                item.price_change_percentage_24h <= 0
                  ? styles.price_color_red
                  : styles.price_color_blue
              }>
              <Text style={styles.label}>(%)24h </Text>
              {formattingPercentage(
                item.price_change_percentage_24h
              ).toString()}
            </Text>
          </View>
          <View>
            <Text
              style={
                item.price_change_percentage_24h <= 0
                  ? styles.price_color_red
                  : styles.price_color_blue
              }>
              <Text style={styles.label}>(%)7d </Text>
              {formattingPercentage(
                item.price_change_percentage_7d_in_currency
              ).toString()}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: colors.borderColor,
            borderBottomWidth: 0.8,
            width: '100%',
            marginBottom: 12,
          }}></View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  price_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },

  image: {
    width: 25,
    height: 25,
  },
  view_container: {
    flex: 0.6,
    alignItems: 'flex-start',
  },
  name_container: {
    flex: 0.4,
  },
  container_flex: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  label: {
    color: colors.textLabel,
    opacity: 0.8,
  },
  price_color_red: {
    color: colors.colorNegative,
  },
  price_color_blue: {
    color: colors.colorPositive,
  },
});

export default CryptocurrencyItem;
