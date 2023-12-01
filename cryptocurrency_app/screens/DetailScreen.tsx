import React, { FC } from 'react';
import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import getLastTotalVolume from '../helpers/getLastTradingVolume';
import formattingPrice from '../helpers/formattingPrice';
import transformDataForChart from '../helpers/transformDataForChart';

import useCryptocurrencyDetail from '../hooks/useCryptocurrencyDetail';
import usePrice from '../hooks/usePrice';

import { IChartData, ICryptocurrencyItem } from '../types/types';

import { colors } from '../globalStyle/colors';

interface IDetailsScreen {
  route: {
    params: ICryptocurrencyItem;
  };
}

const DetailScreen: FC<IDetailsScreen> = ({ route }) => {
  const { id } = route.params;

  const { data, isLoading, isSuccess, isError } = useCryptocurrencyDetail(id);
  const {
    data: price,
    isSuccess: isSuccessPrice,
    isLoading: isLoadingPrice,
  } = usePrice(id);

  const dataChart: IChartData[] = isSuccessPrice
    ? transformDataForChart(price)
    : [];

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} color={colors.primary} />
        </View>
      ) : (
        isSuccess && (
          <View style={styles.detail_container}>
            <View style={styles.name_container}>
              <Image
                source={{ uri: data.cryptocurrencyData.image.small }}
                style={styles.image}
              />
              <Text style={styles.text_name}>
                {data.cryptocurrencyData.name}
              </Text>
            </View>
            <View style={styles.price_container}>
              <Text style={styles.price_text}>
                {formattingPrice(
                  data.cryptocurrencyData.market_data.current_price.usd,
                  '$'
                )}
              </Text>
              <Text style={styles.price_text}>
                {formattingPrice(
                  data.cryptocurrencyData.market_data.current_price.eur,
                  '€'
                )}
              </Text>
              <Text style={styles.price_text}>
                {formattingPrice(
                  data.cryptocurrencyData.market_data.current_price.gbp,
                  '£'
                )}
              </Text>
            </View>
            <View style={styles.line_container}></View>
            <View style={styles.info_container}>
              <View>
                <Text style={styles.label}>Circulating Supply</Text>
                <Text style={styles.label}>Market cup usd</Text>
                <Text style={styles.label}>Market cup eur</Text>
                <Text style={styles.label}>Market cup gbp</Text>
                <Text style={styles.label}>All time high price usd</Text>
                <Text style={styles.label}>All time high price eur</Text>
                <Text style={styles.label}>All time high price gbp</Text>
                <Text style={styles.label}>All time low price usd</Text>
                <Text style={styles.label}>All time low price euro</Text>
                <Text style={styles.label}>All time low price gbp</Text>
                <Text style={styles.label}>24 hour trading volume</Text>
              </View>
              <View style={styles.info_item}>
                <Text style={styles.padding_text}>
                  {data.cryptocurrencyData.market_data.circulating_supply}
                </Text>
                <Text style={styles.padding_text}>
                  {formattingPrice(
                    data.cryptocurrencyData.market_data.market_cap.usd,
                    '$'
                  )}
                </Text>
                <Text style={styles.padding_text}>
                  {formattingPrice(
                    data.cryptocurrencyData.market_data.market_cap.eur,
                    '€'
                  )}
                </Text>
                <Text style={styles.padding_text}>
                  {formattingPrice(
                    data.cryptocurrencyData.market_data.market_cap.gbp,
                    '£'
                  )}
                </Text>
                <Text style={styles.padding_text}>
                  {formattingPrice(
                    data.cryptocurrencyData.market_data.ath.usd,
                    '$'
                  )}
                </Text>
                <Text style={styles.padding_text}>
                  {formattingPrice(
                    data.cryptocurrencyData.market_data.ath.eur,
                    '€'
                  )}
                </Text>
                <Text style={styles.padding_text}>
                  {formattingPrice(
                    data.cryptocurrencyData.market_data.ath.gbp,
                    '£'
                  )}
                </Text>
                <Text style={styles.padding_text}>
                  {formattingPrice(
                    data.cryptocurrencyData.market_data.atl.usd,
                    '$'
                  )}
                </Text>
                <Text style={styles.padding_text}>
                  {formattingPrice(
                    data.cryptocurrencyData.market_data.atl.eur,
                    '€'
                  )}
                </Text>
                <Text style={styles.padding_text}>
                  {formattingPrice(
                    data.cryptocurrencyData.market_data.atl.gbp,
                    '£'
                  )}
                </Text>
                <Text style={styles.padding_text}>
                  {getLastTotalVolume(data.tradingVolumeData)}
                </Text>
              </View>
            </View>

            {isLoadingPrice ? (
              <View style={styles.loader_container}>
                <ActivityIndicator size={'small'} color={colors.primary} />
              </View>
            ) : (
              <View>
                <LineChart
                  data={{
                    labels: dataChart.map((item) => item.label),
                    datasets: [
                      {
                        data: dataChart.map((item) => item.value),
                      },
                    ],
                  }}
                  width={Dimensions.get('window').width - 25} // from react-native
                  height={220}
                  yAxisLabel='$'
                  chartConfig={{
                    backgroundColor: colors.textWhite,
                    backgroundGradientFrom: colors.textWhite,
                    backgroundGradientTo: colors.background,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      borderRadius: 1,
                      padding: 6,
                    },
                    propsForDots: {
                      r: '1',
                      strokeWidth: '0.2',
                      stroke: 'blue',
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 6,
                  }}
                />
              </View>
            )}
          </View>
        )
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detail_container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  image: {
    width: 30,
    height: 30,
  },
  text_name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    color: colors.primaryText,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  name_container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  price_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  price_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primaryText,
  },
  line_container: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 10,
    borderRadius: 6,
    width: '100%',
    marginBottom: 12,
  },
  info_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  info_item: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  padding_text: {
    paddingBottom: 4,
  },
  label: {
    paddingBottom: 4,
    color: colors.textLabel,
  },
  loader_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
});

export default DetailScreen;
