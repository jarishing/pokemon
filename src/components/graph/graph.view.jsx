import React from 'react';
import './graph.css';

import Scatter from '../chart/scatter/scatter';

export default props => {
    // console.log("------------------------");
    // console.log(props);
    return (
        <div className="graph">
            <div className="graph-title">
                Species strength - Win Rate Scatter Chart
            </div>
            <Scatter 
                data={props.data}
            />
        </div>
    )
}