import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {themeColors} from '../constants/theme';

const Button = ({loading, clickHandler, text}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={loading}
        style={styles.buttonContainer}
        onPress={clickHandler}>
        <Text style={styles.buttonText}>
          {loading ? (
            <ActivityIndicator size={'large'} color={'white'} />
          ) : (
            text
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '90%',
    height: 50,
    backgroundColor: themeColors.blue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Button;
