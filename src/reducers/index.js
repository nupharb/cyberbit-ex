import { combineReducers } from 'redux';
import handleRadioButton from './handleRadioButton';
import handleCheckedValue from './handleCheckedValue';
import handleDevices from './handleDevices';

export default combineReducers({
    allDevices: handleDevices,
    radioButtonValue: handleRadioButton,
    checkboxesStatus: handleCheckedValue
});