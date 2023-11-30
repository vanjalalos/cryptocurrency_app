import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useQuery } from 'react-query';
import EmptyListComponent from '../components/common/EmptyList';
import Loader from '../components/common/Loader';
import CryptocurrencyItem from '../components/mainScreen/CryptocurrencyItem';
import ListHeaderComponent from '../components/mainScreen/ListHeaderComponent';
import SearchComponent from '../components/mainScreen/SearchComponent';
import { colors } from '../globalStyle/colors';
import fetchCryptocurrency from '../hooks/useCryptocurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';
import useSearch from '../hooks/useSerach';
import { ICryptocurrencyItem } from '../types/types';

const MainScreen: FC<{ navigation: any }> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchData, setSearchData] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [scrolled, setScrolled] = useState(true);

  //const searchQueryHook = searchQuery !== '' ? useSearch(searchQuery) : null;

  // const {
  //   data: fetchedSearchData,
  //   isLoading: isLoadingSearch,
  //   isError: isErrorSearch,
  // } = useSearch(searchQuery);

  const { isLoading, isError, data, isFetching } = useQuery(
    ['fetchData', page],
    () => fetchCryptocurrency(page),
    { keepPreviousData: true }
  );

  const renderItem = ({ item }: { item: ICryptocurrencyItem }) => {
    return (
      <CryptocurrencyItem
        item={item}
        onPress={(item) => navigation.navigate('DetailScreen', item)}
      />
    );
  };
  // useEffect(() => {
  //   // Function to handle fetching search data
  //   const fetchSearchData = async () => {
  //     if (searchQuery !== '') {
  //       try {
  //         // Perform the search API call using the searchQuery
  //         const result = await fetchSearchResults(searchQuery); // Replace with your API call
  //         setSearchData(result);
  //       } catch (error) {
  //         // Handle errors, if any
  //         console.error('Error fetching search data:', error);
  //         setSearchData(null);
  //       }
  //     } else {
  //       setSearchData(null); // Reset search data if searchQuery is empty
  //     }
  //   };

  //   fetchSearchData(); // Call the function to fetch search data when searchQuery changes
  // }, [searchQuery]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };
  const handleClear = () => {
    setSearchQuery('');
  };

  //console.log('DATA', data?.pages.length);

  const handleOnEndReached = () => {
    if (!scrolled) {
      page < 5 && setPage(page + 1);
      setScrolled(true);
      console.log('test', page);
    }
  };
  // searchQuery && console.log('search', searchQuery, 'data', searchData);
  // console.log('RESPONSE', data && data?.pages);
  //console.log('search data', searchData);
  return (
    <SafeAreaView style={styles.container}>
      <>
        <View>
          <SearchComponent onSearch={handleSearch} onClear={handleClear} />
        </View>
        {searchQuery !== '' ? (
          <View>
            <Text>SEarch</Text>
          </View>
        ) : (
          //{
          // isError &&
          //   Alert.alert(
          //     'Alert Title',
          //     'My Alert Msg',
          //     [
          //       {
          //         text: 'Cancel',
          //         onPress: () => 'cancel',
          //         style: 'cancel',
          //       },
          //     ],
          //     {
          //       cancelable: true,
          //     }
          //   )
          // <ErrorScreen resetError={() => navigation.navigate('Home')} />
          //}
          <>
            {isLoading ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 24,
                }}>
                <ActivityIndicator size={'large'} color={colors.primary} />
              </View>
            ) : (
              <FlatList
                style={styles.flatList}
                //data={data?.pages.map((i) => i).flat()}
                data={data}
                numColumns={1}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
                ListEmptyComponent={<EmptyListComponent />}
                onEndReached={handleOnEndReached}
                onEndReachedThreshold={0.5}
                onScrollBeginDrag={() => setScrolled(false)}
                //nestedScrollEnabled={false}

                // ListFooterComponent={() => (
                //   <Loader sizeLoader='small' isLoading={isLoading} />
                // )}
              />
            )}
          </>
        )}
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
    //marginTop: 12,
  },
});

export default MainScreen;
