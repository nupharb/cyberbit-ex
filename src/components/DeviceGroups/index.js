import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import DeviceGroup from '../DeviceGroup/';

const DeviceGroups = (props) => {
    const groups = props.state[props.name];
    return (
        <div className='devices'>
        {
            groups.map((group, index) => (
                <DeviceGroup group={group} key={index} />
            ))
        }
        {/* <div key={index}>{ group.name }</div> */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return { state: state.allDevices };
}

export default connect(mapStateToProps, actions)(DeviceGroups);