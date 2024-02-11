import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {themeColors} from '../constants/theme';

const InputBox = ({value, onChangeText, placeholder}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value.toString()}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'black'}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: themeColors.blue,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    color: 'black',
  },
});

export default InputBox;
