import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';

import SearchComponent from '../components/searchScreen/SearchComponent';
import SearchItem from '../components/searchScreen/SearchItem';
import EmptyListComponent from '../components/common/EmptyList';

import { colors } from '../globalStyle/colors';
import fetchSearchData from '../hooks/useSearch';
import { ISearchScreen } from '../types/types';
import ErrorView from '../components/common/ErrorView';

interface ISearchScreenProp {
  coin: ISearchScreen[];
  navigation: any;
}

const SearchScreen: FC<ISearchScreenProp> = (props) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { data, isLoading, isError } = useQuery(
    ['search', searchQuery],

    () => fetchSearchData(searchQuery)
  );

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };
  const handleClear = () => {
    setSearchQuery('');
  };

  const renderItem = ({ item }: { item: ISearchScreen }) => {
    return (
      <SearchItem
        item={item}
        onPress={(item) => props.navigation.navigate('DetailScreen', item)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <View>
          <SearchComponent onSearch={handleSearch} onClear={handleClear} />
        </View>

        <>
          <View style={styles.loading}>
            {isError ? (
              <ErrorView message={'Fetching data error!!!'} />
            ) : isLoading ? (
              <ActivityIndicator size={'large'} color={colors.primary} />
            ) : (
              data && (
                <FlatList
                  style={styles.flatList}
                  data={data && data.coins}
                  numColumns={1}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
                  ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
                  ListEmptyComponent={<EmptyListComponent />}
                />
              )
            )}
          </View>
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
});

export default SearchScreen;
