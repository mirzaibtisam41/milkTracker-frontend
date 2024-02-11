import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {themeColors} from '../constants/theme';
import moment from 'moment';

const Header = ({text, date}) => {
  return (
    <View style={styles.pageHeader}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pageHeader: {
    backgroundColor: themeColors.blue,
    paddingVertical: 25,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  text: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    textTransform: 'capitalize',
  },
});

export default Header;
