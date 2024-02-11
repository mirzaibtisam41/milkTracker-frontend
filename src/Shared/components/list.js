import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {themeColors} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';

const List = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.tableRow}>
      <View style={styles.tableRowText}>
        <Text style={styles.tableText}>{item?.dayNumber}</Text>
      </View>
      <View style={styles.tableRowText}>
        <Text style={styles.tableText}>{item?.dayName}</Text>
      </View>
      <View style={styles.tableRowText}>
        <Text style={styles.tableText}>{item?.quantity}</Text>
      </View>
      <View style={styles.tableRowText}>
        <Text
          onPress={() => navigation.navigate('Edit', {item: item})}
          style={styles.editText}>
          {'Edit'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tableRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  tableRowText: {
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tableText: {
    color: 'black',
  },
  editText: {
    color: themeColors.blue,
  },
});

export default List;
