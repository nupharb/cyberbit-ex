import React from 'react';
import { connect } from 'react-redux';
import { changeRadioValue } from '../../actions';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './times.css'

const Times = (props) => {
    const times = props.allDevices[props.name];
    const handleChange = (event) => {
        props.changeValue(event.target.value);
    }

    const radioSelectedValue = ( props.radioValue.length === 0 ) ?  times[1].name : props.radioValue[props.radioValue.length - 1].value;

    return (
        <div className='times'>
            <RadioGroup className='radio-group' value={ radioSelectedValue } onChange={ (event) => handleChange(event) } >
                {
                    times.map((timePeriod) => (
                        <FormControlLabel 
                            key={ timePeriod.id } 
                            control={ <Radio color='primary' /> } 
                            value={ timePeriod.name } 
                            label={ timePeriod.name } 
                        />
                    ))
                }
            </RadioGroup>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { 
        allDevices: state.allDevices, 
        radioValue: state.radioButtonValue 
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (value) => dispatch(changeRadioValue(value))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Times);