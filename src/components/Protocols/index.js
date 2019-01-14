import React from 'react';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { changeCheckedValue } from '../../actions';

const Protocols = (props) => {
    const protocols = props.allDevices[props.name];
    
    const handleChange = (event, name) => {
        props.changeValue(name, event.target.checked);              
    }
    return (
        <div className='protocols'>
            {
                protocols.map((protocol) => (
                    <FormControlLabel 
                        key={ protocol.id } 
                        control={ 
                            <Checkbox 
                                checked={ props.checkboxesStatus[protocol.name] }
                                onChange={(event) => handleChange(event, protocol.name)} 
                                color='primary' 
                            /> 
                        } 
                        label={ protocol.name } 
                    />
                ))
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return { 
        allDevices: state.allDevices,
        checkboxesStatus: state.checkboxesStatus 
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (name, isChecked) => dispatch(changeCheckedValue(name, isChecked))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Protocols);