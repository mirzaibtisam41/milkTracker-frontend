import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {themeColors} from '../constants/theme';

const Heading = ({heading}) => {
  return (
    <View>
      <Text style={styles.formText}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formText: {
    color: themeColors.blue,
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Heading;
