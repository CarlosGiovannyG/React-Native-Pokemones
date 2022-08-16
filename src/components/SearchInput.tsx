import React, {useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebouncedValue} from '../hooks/useDebouncedValue';

import {PropsSearchInput} from '../interfaces/interfacesProps';
import {searchCompTheme} from '../styles/searchCompTheme';

export const SearchInput = ({style, onDebounce}: PropsSearchInput) => {
  const [stateInput, setStateInput] = useState('');
  

  const debonceValue = useDebouncedValue(stateInput,300);

  useEffect(() => {
    onDebounce(debonceValue);
  }, [debonceValue]);

  return (
    <View style={{...searchCompTheme.container, ...(style as any)}}>
      <View style={searchCompTheme.stContainerInput}>
        <TextInput
          placeholder="Buscar Pokemon"
          style={searchCompTheme.stTextInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={stateInput}
          onChangeText={setStateInput}
        />
        <Icon name="search-outline" color="grey" size={30} />
      </View>
    </View>
  );
};
