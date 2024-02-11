import {useFocusEffect} from '@react-navigation/native';
import moment from 'moment';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import {getMilkDetailListAPI} from '../../Shared/Api';
import {themeColors} from '../../Shared/constants/theme';
import HeaderColumn from '../../Shared/components/headerColumn';
import List from '../../Shared/components/list';
import Search from '../../Shared/components/search';
import Header from '../../Shared/components/Header';

const Index = () => {
  const [dataList, setDataList] = useState(null);
  const [loading, setLoading] = useState(false);

  const todayDate = new Date();
  const [month, setMonth] = useState(
    moment(todayDate).format('MMMM').toLowerCase() || '',
  );
  const [year, setYear] = useState(todayDate.getFullYear() || '');

  const showToast = message => {
    Toast.show(message);
  };

  useEffect(() => {
    getMilkListData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getMilkListData();
    }, []),
  );

  const getMilkListData = async () => {
    setLoading(true);
    const details = {month: month?.toLowerCase(), year};
    try {
      const response = await fetch(getMilkDetailListAPI, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(details),
      });
      const data = await response.json();
      setLoading(false);
      setDataList({list: data?.body, listOf: {month, year}});
      showToast('Fetched data successfully');
    } catch (err) {
      setLoading(false);
      showToast('An error occoured while fetching data');
    }
  };

  const totalQuantity = dataList?.list?.reduce((acc, next) => {
    const quantity = next.quantity || 0;
    return quantity + acc;
  }, 0);

  return (
    <View style={styles.container}>
      <Header
        text={'Milk Details List'}
        date={
          dataList?.list &&
          dataList?.listOf?.month + ' ' + dataList?.listOf?.year
        }
      />
      <Search
        month={month}
        year={year}
        setMonth={setMonth}
        setYear={setYear}
        getMilkListData={getMilkListData}
      />
      {loading ? (
        <ActivityIndicator
          style={styles.loadingIndicator}
          color={themeColors.blue}
          size={'large'}
        />
      ) : (
        <View style={styles.formView}>
          {dataList?.list?.length > 0 ? (
            <View>
              <View style={styles.tableHeader}>
                <HeaderColumn title={'Date'} />
                <HeaderColumn title={'Day'} />
                <HeaderColumn title={'Quantity (kg)'} />
                <HeaderColumn title={'Action'} />
              </View>
              <ScrollView>
                {dataList?.list?.map(item => {
                  return <List key={item._id} item={item} />;
                })}
                <View style={styles.tableHeader}>
                  <HeaderColumn title={'Total'} />
                  <HeaderColumn title={''} />
                  <HeaderColumn title={totalQuantity + ' kg'} />
                  <HeaderColumn title={''} />
                </View>
              </ScrollView>
            </View>
          ) : (
            <Text style={styles.errorText}>Sorry, No record found</Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  formView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingTop: 20,
    paddingBottom: 10,
  },
  tableHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: themeColors.blue,
    padding: 10,
  },
  loadingIndicator: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
  },
});

export default Index;
