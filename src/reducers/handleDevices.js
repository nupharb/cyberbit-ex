const handleDevices = ( state = [], action ) => {
    switch( action.type ) {
        case 'CHANGE_CHECKED_DEVICES': 
            return {
                ...state, 
            };
        case 'TOGGLE_COLLAPSE':
            const newState = { ...state };
            newState.device_groups[action.groupId - 1].isOpen = action.isOpen;
            return newState;
        
        
        default: {
            return state;
        }
    }
}

export default handleDevices;