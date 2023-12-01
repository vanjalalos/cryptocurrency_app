import React, { FC, useState } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Button,
} from 'react-native';

import { useInfiniteQuery, useQuery } from 'react-query';

import EmptyListComponent from '../globalStyle/components/common/EmptyList';
import ErrorView from '../globalStyle/components/common/ErrorView';
import Loader from '../globalStyle/components/common/Loader';
import CryptocurrencyItem from '../globalStyle/components/mainScreen/CryptocurrencyItem';

import fetchCryptocurrency from '../hooks/useCryptocurrency';

import { colors } from '../globalStyle/colors';
import { ICryptocurrencyItem } from '../types/types';

const MainScreen: FC<{ navigation: any }> = ({ navigation }) => {
  const [page, setPage] = useState<number>(1);

  // page added in the local state because API doesn't support page tagging;
  // loading of new pages is limited to three pages because the test
  // API does not allow more calls in a short period

  const { data, fetchNextPage, isLoading, isError, hasNextPage } =
    useInfiniteQuery('fetchData', fetchCryptocurrency, {
      getNextPageParam: (lastPage) => {
        if (page < 3) {
          return page + 1;
        }
        return lastPage;
      },
      enabled: page < 3,
    });

  const renderItem = ({ item }: { item: ICryptocurrencyItem }) => {
    return (
      <CryptocurrencyItem
        item={item}
        onPress={(item) => navigation.navigate('DetailScreen', item)}
      />
    );
  };

  const handleOnEndReached = () => {
    if (hasNextPage && page < 3) {
      setPage(page + 1);
      fetchNextPage();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <View>
          <Button
            title='Search'
            onPress={() => navigation.navigate('Search')}
          />
        </View>

        <>
          {isError ? (
            <ErrorView message={'Fetching data error!!!'} />
          ) : isLoading ? (
            <View style={styles.loading_container}>
              <ActivityIndicator size={'large'} color={colors.primary} />
            </View>
          ) : (
            <FlatList
              style={styles.flatList}
              data={data?.pages.map((i) => i).flat()}
              numColumns={1}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
              ListEmptyComponent={<EmptyListComponent />}
              ListFooterComponent={() => (
                <View style={styles.footer}>
                  {isLoading ? (
                    <Loader sizeLoader='small' isLoading={isLoading} />
                  ) : (
                    page < 3 && (
                      <View>
                        <Button
                          title='Load more'
                          onPress={handleOnEndReached}
                          color={colors.primary}
                        />
                      </View>
                    )
                  )}
                </View>
              )}
            />
          )}
        </>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  flatList: {
    padding: 16,
    backgroundColor: colors.background,
    width: '100%',
  },
  footer: {
    marginVertical: 20,
  },
  loading_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
});

export default MainScreen;
