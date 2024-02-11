import React from 'react';
import {StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

export default ({selectedDate, setSelectedDate}) => {
  return (
    <View style={styles.datePicker}>
      <DatePicker
        mode={'date'}
        date={selectedDate}
        onDateChange={setSelectedDate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
