import { useState } from 'react';
import { Searchbar } from 'react-native-paper';

export interface SearchBarProps {}

export const SearchBar = (props: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={(query) => setSearchQuery(query)}
      value={searchQuery}
    />
  );
};
