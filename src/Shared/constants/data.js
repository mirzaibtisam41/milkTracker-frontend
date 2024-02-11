import moment from 'moment';

export const prepareMilkDetails = ({quantity, selectedDate}) => {
  const dayNumber = moment(selectedDate).date();
  const dayName = moment(selectedDate).format('dddd');
  const month = moment(selectedDate).format('MMMM').toLowerCase();
  const year = moment(selectedDate).year();
  const quantityConverted = Number(quantity);

  return {
    dayNumber,
    dayName,
    month,
    year,
    quantity: quantityConverted,
  };
};

export const prepareUpdateMilkDetails = ({quantity}) => {
  const quantityConverted = Number(quantity);

  return {
    quantity: quantityConverted,
  };
};

export const monthsList = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};
