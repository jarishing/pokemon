import React from 'react';
import './detail.css';

import Table from '../table/table';
import AttributeTable from '../attributeTable/attributeTable';

export default props => {

    // console.log("----------------pkmon---------------------------");
    // console.log(props.selected);
    // console.log("------------------pkmon_win_rate-------------------------");
    // console.log(props.pkmon_win_rate);
    // console.log("-------------------attribute_win_rate------------------------");
    // console.log(props.attribute_win_rate);

    return (
        <div className="detail">
            <div className="detail-row">
                <div className="detail-rank-wrapper">
                    <Table
                        title="Species strength"
                        subtitle="Value"
                        data={props.pkmon_win_rate}
                        rankType="TotalRank"
                        dataType="Total"
                        pkmon={props.selected["#"]}
                        color="#1D91D0"
                    />
                </div>
                <div className="detail-rank-wrapper">
                    <Table
                        title="Win Rate"
                        subtitle="Win Rate"
                        data={props.pkmon_win_rate}
                        rankType="WinRank"
                        dataType="WinRate"
                        pkmon={props.selected["#"]}
                        color="#CC0000"
                    />
                </div>
            </div>
            <div className="detail-row">
                <div className="detail-rank-wrapper">
                    <AttributeTable
                        title="Attribute Win Rate"
                        subtitle="Win Rate"
                        data={props.attribute_win_rate}
                        rankType="AverageWinRank"
                        dataType="AverageWinRate"
                        attribute={props.selected["Type 1"]}
                        color="#c7a008"
                    />
                </div>
                <div className="detail-rank-wrapper">
                    <Table
                        title="Expected Win Rate Difference"
                        subtitle="Difference"
                        data={props.pkmon_win_rate}
                        rankType="DiffRank"
                        dataType="WinDiff"
                        pkmon={props.selected["#"]}
                        color="#408861"
                    />
                </div>
            </div>
        </div>
    )
}