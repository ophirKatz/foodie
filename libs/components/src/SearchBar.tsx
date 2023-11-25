import { useState } from 'react';
import { Searchbar } from 'react-native-paper';

export const SearchBar = () => {
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
