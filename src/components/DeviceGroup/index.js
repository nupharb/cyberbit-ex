import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Collapse } from 'react-collapse';
import { connect } from 'react-redux';
import { toggleCollapse } from '../../actions';
import DeviceList from '../DeviceList/';
import './deviceGroup.css';

const DeviceGroup = (props) => {
    const deviceGroup = props.isCollapsed.device_groups;
    const isOpen = (deviceGroup[props.group.id - 1].isOpen === undefined) ? false : deviceGroup[props.group.id - 1].isOpen;
    let allChecked = false;
    const handleClick = () => {
        props.toggleCollapse(!deviceGroup[props.group.id - 1].isOpen, props.group.id);
    }
    return (
        <div className='device-group'>
            <div className='open-wrap'>
                <button onClick={ handleClick }>></button>
                
                <FormControlLabel 
                    control={ 
                        <Checkbox 
                            checked={ allChecked } 
                            /* onChange={(event) => handleChange(event, protocol.name)} */ 
                            color='primary' 
                        /> 
                    } 
                    label={ props.group.name } 
                />
            </div>
            
            <Collapse isOpened={ isOpen }>
                {
                    <DeviceList 
                        groupIndex={props.group.id} 
                        devices={props.group.devices}
                        allChecked={allChecked} 
                    />
                }
            </Collapse>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        isCollapsed: state.allDevices
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCollapse: (isOpen, groupId) => { dispatch(toggleCollapse(isOpen, groupId))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceGroup);
