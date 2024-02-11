import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Toast from 'react-native-simple-toast';
import {updateMilkDetailListAPI} from '../../Shared/Api';
import Button from '../../Shared/components/Button';
import Form from '../../Shared/components/Form';
import Header from '../../Shared/components/Header';
import Heading from '../../Shared/components/Heading';
import {prepareUpdateMilkDetails} from '../../Shared/constants/data';
import {useNavigation} from '@react-navigation/native';

const Index = ({route}) => {
  const navigation = useNavigation();
  const {item} = route?.params;

  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(item?.quantity || '');

  const showToast = message => {
    Toast.show(message);
  };

  const submitDetails = async () => {
    if (!quantity) {
      showToast('Please add quantity');
      return;
    }

    const details = prepareUpdateMilkDetails({quantity});
    try {
      setLoading(true);
      const response = await fetch(`${updateMilkDetailListAPI}/${item?._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      });
      const data = await response.json();
      if (data) {
        setLoading(false);
        showToast('Data updated successfully');
        setQuantity('');
        navigation.navigate('Detail');
      }
    } catch (error) {
      setLoading(false);
      showToast('An error occurred while updating data');
    }
  };

  return (
    <View style={styles.container}>
      <Header
        text={'Enter Milk Details'}
        date={`${item.dayName}, ${item.month} ${item.dayNumber}, ${item.year}`}
      />
      <Heading heading={'Enter Details'} />
      <ScrollView style={styles.scrollView}>
        <Form item={item} setQuantity={setQuantity} quantity={quantity} />
        <Button
          loading={loading}
          clickHandler={submitDetails}
          text={'Edit Detail'}
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
