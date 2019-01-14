import React from 'react';
import { components } from '../InnerSection/';
import './section.css'

const Section = (props) => {
    const InnerSection = components[props.index];
    return (
        <div className='section-comp'>
            <div className='title'>{props.index + 1}. Select {props.title}</div>
            <InnerSection name={props.name} />
        </div>
    );
};

export default Section;