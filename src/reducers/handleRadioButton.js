const handleRadioButton = ( state = [], action ) => {
    switch( action.type ) {
        case "CHANGE_RADIO_VALUE": {
            return [
                ...state, 
                { 
                    value: action.value 
                }
            ]
        }

        default: {
            return state;
        }
    }
}

export default handleRadioButton;