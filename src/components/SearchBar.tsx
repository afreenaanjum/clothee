import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

type SearchBarProps = {
  updateList: (text: string) => void;
  value: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  updateList,
  value,
}: SearchBarProps) => {
  const changeValue = (text: string) => {
    updateList(text);
  };

  return (
    <View style={[styles.container]}>
      <TextInput
        value={value}
        numberOfLines={2}
        onChangeText={text => changeValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default SearchBar;
