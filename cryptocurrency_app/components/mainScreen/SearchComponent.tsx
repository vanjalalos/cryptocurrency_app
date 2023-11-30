import React, { useState, FC } from 'react';
import { View, StyleSheet } from 'react-native';

import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../globalStyle/colors';
import { ISearchComponent } from '../../types/types';
import { SearchBarBaseProps } from 'react-native-elements/dist/searchbar/SearchBar';

const SearchComponent: FC<ISearchComponent> = ({ onSearch, onClear }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };
  const handleClear = () => {
    setSearchQuery('');
    onClear();
  };

  // INFO: Using SearchBarBaseProps instead of SearchBarDefaultProps & SearchBarAndroidProps & SearchBarIOSProps
  // URL: https://stackoverflow.com/questions/68401996/typescript-error-when-using-searchbar-from-react-native-elements
  const SafeSearchBar = SearchBar as unknown as React.FC<SearchBarBaseProps>;

  return (
    <View style={styles.container}>
      <SafeSearchBar
        platform='ios'
        placeholder='Search'
        value={searchQuery}
        onChangeText={(text: string) => setSearchQuery(text)}
        onClear={() => handleClear()}
        autoCapitalize='none'
        autoCorrect={false}
        onCancel={() => handleClear()}
        searchIcon={
          <Ionicons
            name='search'
            size={24}
            color={colors.primaryText}
            onPress={() => handleSearch()}
          />
        }
        inputStyle={{
          paddingLeft: 6,
        }}
        selectionColor={colors.primary}
        containerStyle={{
          backgroundColor: colors.secondary,
        }}
        leftIconContainerStyle={{ backgroundColor: colors.secondary }}
        inputContainerStyle={{
          backgroundColor: colors.secondary,
          borderColor: colors.primary,
          borderWidth: 1.5,
          borderBottomWidth: 1.5,
          height: 45,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 6,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    padding: 8,
  },
});

export default SearchComponent;
