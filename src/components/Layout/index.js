import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Section from '../Section/';
import Summary from '../Summary/';
import './layout.css'

const Layout = (props) => {
    const dataKeys = Object.keys(props.state);
    const sections = [{
                        'title' : 'Blackboxes',
                        'component' : 'Devices'
                    }, {
                        'title' : 'Protocols',
                        'component' : 'Protocols'
                    }, {
                        'title' : 'Time Period',
                        'component' : 'Time'
                    }]
    return (
        <div className='layout'>
            {
                dataKeys.map((section, index) => (
                    <Section 
                        name={section} 
                        title={sections[index].title} 
                        key={index} 
                        index={index}  
                    />
                ))
            }
            <Summary />
        </div>
    )
};

const mapStateToProps = (state) => {
    return { state: state.allDevices };
}

export default connect(mapStateToProps, actions)(Layout);