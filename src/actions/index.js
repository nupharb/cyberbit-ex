export const changeRadioValue = ( value ) => ({
    type: 'CHANGE_RADIO_VALUE',
    value
});

export const changeCheckedValue = ( name, isChecked ) => ({
    type: 'CHANGE_CHECKED_VALUE',
    name,
    isChecked
});

export const toggleCollapse = ( isOpen, groupId ) => ({
    type: 'TOGGLE_COLLAPSE',
    isOpen,
    groupId
});

export const changeCheckedDevices = ( name, isChecked, groupId ) => ({
    type: 'CHANGE_CHECKED_DEVICES',
    name,
    isChecked,
    groupId
});