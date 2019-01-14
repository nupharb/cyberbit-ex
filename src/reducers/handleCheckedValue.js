const initialState = {
    'Modbus': false,
    'DNP 3' : false, 
    'IEC104': false, 
    'MMS': false
};

const handleCheckedValue = ( state = initialState, action ) => {
    switch( action.type ) {
        case "CHANGE_CHECKED_VALUE": {
            return {
                ...state, 
                [action.name]: action.isChecked
            };
        }

        default: {
            return state;
        }
    }
}

export default handleCheckedValue;