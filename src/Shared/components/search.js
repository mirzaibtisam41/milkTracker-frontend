import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {themeColors} from '../constants/theme';
import Dropdown from './dropDown';

const data = [
  {key: '1', value: 'Mobiles', disabled: true},
  {key: '2', value: 'Appliances'},
  {key: '3', value: 'Cameras'},
  {key: '4', value: 'Computers', disabled: true},
  {key: '5', value: 'Vegetables'},
  {key: '6', value: 'Diary Products'},
  {key: '7', value: 'Drinks'},
];

const Search = ({month, setMonth, getMilkListData}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.input}>
        <Dropdown setMonth={setMonth} />
      </View>
      <TouchableOpacity
        disabled={month === '' ? true : false}
        style={styles.buttonContainer}
        onPress={getMilkListData}>
        <Text style={styles.btnText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items at the start
    marginTop: 20,
  },
  input: {
    flexGrow: 1,
    marginHorizontal: 5,
    color: 'black',
    borderRadius: 5,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexGrow: 1,
    height: 50,
    backgroundColor: themeColors.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 15,
  },
});

export default Search;
