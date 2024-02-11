import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {themeColors} from '../../Shared/constants/theme';
import {useNavigation} from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../../Shared/assets/splash.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: '100%',
  },
  image: {
    width: '100%',
  },
});

export default Index;
