import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.tableHeaderText}>
      <Text style={styles.textColor}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tableHeaderText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textColor: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Header;
