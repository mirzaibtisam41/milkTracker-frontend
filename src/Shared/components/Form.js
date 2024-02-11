import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import InputBox from './InputBox';
import OptionText from './OptionText';

const Index = ({item, setQuantity, quantity}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.formView}>
      <InputBox
        value={quantity}
        onChangeText={text => setQuantity(text)}
        placeholder="Milk Quantity"
      />

      {!item && (
        <OptionText
          text={"Current Month's Detail ?"}
          clickHandler={() => navigation.navigate('Detail')}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

export default Index;
