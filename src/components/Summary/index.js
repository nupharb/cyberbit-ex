import React from 'react';
import { connect } from 'react-redux';

const Summary = (props) => {
    const devicesList = props.allDevices.device_groups.map((group) => ( group.devices ));
    const protocolsKeys = Object.keys(props.protocols);
    const period = (props.period.length === 0) ? '' : props.period[props.period.length - 1].value;
    console.log('Summary: ', props);
    return (
        <div className='summary section-comp'>
            <div className='title'>Summary</div>
            <div className='summary-devices'>
                <div className='list-title'>1. Device List</div>
                {
                    devicesList.map((group) => (
                        group.map((device) => (
                            device.active &&
                            <div key={ device.id } className='device'>{ device.name }</div>
                        ))
                    ))
                }
            </div>
            <div className='summary-protocols'>
                <div className='list-title'>2. Protocols List</div>
                {
                    protocolsKeys.map((protocolKey, index) => (
                        props.protocols[protocolKey] && <div key={ index } className='protocol'>{ protocolKey }</div>
                    ))
                }
            </div>
            <div className='summary-period'>
                <div className='list-title'>3. Period</div>
                <div className='period'>{ period }</div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        allDevices: state.allDevices,
        protocols: state.checkboxesStatus,
        period: state.radioButtonValue
    };
};

export default connect(mapStateToProps, null)(Summary);