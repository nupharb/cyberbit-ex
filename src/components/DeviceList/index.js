import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';
import { changeCheckedDevices } from '../../actions';

const DeviceList = (props) => {
    const handleChange = (event, name) => {
        props.changeValue(name, event.target.checked, props.groupIndex);
    }
    return (
        <div className='device-list'>
            {
                props.devices.map((device, index) => (
                    <div key={index} className='device'>
                        <FormControlLabel 
                            control={ 
                                <Checkbox  
                                    checked={device.active}
                                    onChange={(event) => handleChange(event, device.name)}
                                    color='primary' 
                                /> 
                            } 
                            label={ device.name } 
                        />
                    </div>
                ))
            }
        </div>
    );
}

const mapStateToProps = (state) => (
    {devicesStatus: state.allDevices}
);

const mapDispatchToProps = (dispatch) => (
    {changeValue: (name, isChecked, groupIndex) => dispatch(changeCheckedDevices(name, isChecked, groupIndex))}
);

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);