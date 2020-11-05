import React from 'react';
import { Select } from 'antd';
import './main.css';
import 'antd/dist/antd.css';
import { RiSwordLine, RiBarChartBoxLine } from "react-icons/ri";
import { AiOutlineDotChart } from "react-icons/ai";
// FcScatterPlot AiOutlineDotChart

import Info from '../components/info/info';
import Battle from '../components/battle/battle';
import Detail from '../components/detail/detail';
import Graph from '../components/graph/graph';

const { Option } = Select;

export default props => {

    let PropsData = {
        pkmon_list: props.pkmon_list,
        p1: props.p1,
        p2: props.p2,
        winner: props.winner
    };

    let PropsFunction = {
        onP2SelectorChange: props.onP2SelectorChange
    }

    return (
        <div>
            {
                props.pkmon_list &&
                <div className="wrapper">
                    <div className="nav">
                        <div 
                            className={props.mode == "Battle"?"modalList-selected":"modalList"}
                            style={{marginLeft: '315px'}}
                            onClick={()=>
                                props.selectMode("Battle")
                            }
                        >
                            <RiSwordLine/> <div style={{fontSize:'18px', marginLeft:'10px'}}>Battle</div>
                        </div>
                        <div 
                            className={props.mode == "Detail"?"modalList-selected":"modalList"}
                            style={{marginLeft: '15px'}}
                            onClick={()=>
                                props.selectMode("Detail")
                            }
                        >
                            <RiBarChartBoxLine/> <div style={{fontSize:'18px', marginLeft:'10px'}}>Detail</div>
                        </div>
                        <div 
                            className={props.mode == "Chart"?"modalList-selected":"modalList"}
                            style={{marginLeft: '15px'}}
                            onClick={()=>
                                props.selectMode("Chart")
                            }
                        >
                            <AiOutlineDotChart/> <div style={{fontSize:'18px', marginLeft:'10px'}}>Chart</div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="info-wrapper">
                            <Select
                                showSearch
                                style={{ width: 270, marginBottom: 20, border: '1px #1D91D0 solid', fontSize: 15, color:"#1D91D0" }}
                                placeholder="Select a pokemon"
                                optionFilterProp="children"
                                onChange={props.onP1SelectorChange}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    Object.values(props.pkmon_list).map(
                                        (item, index) => 
                                        <Option key={index} value={item["#"]} style={{color:"#1D91D0"}}>No.{item["#"]}    {item.Name}</Option>
                                    )
                                }
                            </Select>
                            <Info 
                                pkmon={props.p1}
                                winner={props.winner=="p1"? true:false}
                            />
                        </div>
                        <div className="status">
                            {
                                props.mode == "Battle" &&
                                <Battle
                                    data={PropsData}
                                    function={PropsFunction}
                                />
                            }
                            {
                                props.mode == "Detail" &&
                                <Detail
                                    selected={props.p1}
                                    pkmon_win_rate={props.pkmon_win_rate}
                                    attribute_win_rate={props.attribute_win_rate}
                                />
                            }
                            {
                                props.mode == "Chart" &&
                                <Graph
                                    data={props.scatter_data}
                                />
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


// C:\Users\user\Desktop\present\pkmon\src\resources\images\bulbasaur.png
// src\resources\images\abra.png