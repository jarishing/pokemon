import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import './battle.css';

import Info from '../info/info';
import Radar from '../chart/radar/radar';

const { Option } = Select;

export default props => {  
    // console.log("-------------------battle----------------");
    // console.log(props);
    return (
        <div className="battle">
            <div className="battle-chart-wrapper">
                <Radar
                  p1={props.data.p1}
                  p2={props.data.p2}
                />
            </div>
            <div className="info">
                <Select
                    showSearch
                    style={{ width: 270, marginBottom: 20, border: '1px #CC0000 solid', fontSize: 15, color: "#CC0000"}}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={props.function.onP2SelectorChange}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    >
                      {
                        Object.values(props.data.pkmon_list)
                          .filter( item => item["#"] != props.data.p1["#"])
                          .map(
                            (item, index) => 
                            <Option key={index} value={item["#"]} style={{color:"#CC0000"}}>No.{item["#"]}    {item.Name}</Option>
                          )
                      }
                </Select>
                <Info 
                  pkmon={props.data.p2}
                  winner={props.data.winner=="p2"? true:false}
                  p2={true}
                />
            </div>
        </div>
    )
}