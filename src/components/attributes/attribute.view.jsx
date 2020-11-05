import React from 'react';
import './attribute.css';

import Attribute from './attibute.color.json';

export default props => {

    return (
        <div className="attribute-box" style={{background: Attribute[props.value]}}>
            {props.value}
        </div>
    )
}