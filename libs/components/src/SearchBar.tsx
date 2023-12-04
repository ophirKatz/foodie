import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { rootStyles } from './styles';

export interface SearchBarProps {}

export const SearchBar = (props: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <Searchbar
      iconColor={rootStyles.primaryColor.color}
      placeholder="Search"
      onChangeText={(query) => setSearchQuery(query)}
      value={searchQuery}
    />
  );
};
