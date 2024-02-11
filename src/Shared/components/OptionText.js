import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {themeColors} from '../constants/theme';

const OptionText = ({text, clickHandler}) => {
  return (
    <View style={styles.optionsView}>
      <Text onPress={clickHandler} style={styles.optionText}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  optionText: {
    color: themeColors.blue,
    fontSize: 15,
  },
});

export default OptionText;
