import SelectDropdown from 'react-native-select-dropdown';
import {monthsList} from '../constants/data';
import {themeColors} from '../constants/theme';

function Dropdown({setMonth}) {
  const months = Object.values(monthsList);

  return (
    <SelectDropdown
      data={months}
      buttonStyle={{backgroundColor: themeColors.blue}}
      buttonTextStyle={{color: 'white'}}
      onSelect={(selectedItem, index) => {
        setMonth(selectedItem);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
    />
  );
}

export default Dropdown;
