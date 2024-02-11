import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../../Shared/components/Header';
import MyDatePicker from '../../Shared/components/DatePicker';
import Heading from '../../Shared/components/Heading';
import Form from '../../Shared/components/Form';
import Button from '../../Shared/components/Button';
import {prepareMilkDetails} from '../../Shared/constants/data';
import {addMilkDetailAPI} from '../../Shared/Api';
import Toast from 'react-native-simple-toast';
import moment from 'moment';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState('');

  const showToast = message => {
    Toast.show(message);
  };

  const submitDetails = async () => {
    if (!quantity) {
      showToast('Please add quantity');
      return;
    }

    const details = prepareMilkDetails({quantity, selectedDate});
    try {
      setLoading(true);
      const response = await fetch(addMilkDetailAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      });
      const data = await response.json();
      if (data) {
        setLoading(false);
        showToast('Data added successfully');
        setQuantity('');
      }
    } catch (error) {
      setLoading(false);
      showToast('An error occurred while adding data');
    }
  };

  return (
    <View style={styles.container}>
      <Header
        text={'Enter Milk Details'}
        date={`${moment().format('dddd')}, ${moment().format('LL')}`}
      />
      <Heading heading={'Enter Details'} />
      <ScrollView style={styles.scrollView}>
        <MyDatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <Form item={null} setQuantity={setQuantity} quantity={quantity} />
        <Button
          loading={loading}
          clickHandler={submitDetails}
          text={'Add Detail'}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingBottom: 20,
  },
});

export default Index;
