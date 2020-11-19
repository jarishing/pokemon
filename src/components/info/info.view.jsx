import React from 'react';
import './info.css';

import Attribute from '../attributes/attribute';
import Bar from '../chart/bar/bar';
import { GiWingedSword } from "react-icons/gi";
// GiWingedSword

export default props => {
    // console.log('--------------------');
    // console.log(props);
    return (
        <div className="info">
            {
                props.pkmon?
                <div>
                    <div className="info-image">
                        {/* <div className="info-winner-v2">
                            <GiWingedSword/> <div style={{marginLeft:'10px', fontSize:'21px', marginTop: '5px'}}>WINNER</div>
                        </div> */}
                        {/* <img src={`/images/${props.pkmon["#"]}.png`}></img> */}
                    </div>
                    <div className={props.p2? "info-status-p2":"info-status"}>
                        <div>
                            {props.pkmon.Name}
                        </div>
                        <div className={props.p2? "line-p2":"line"}/>
                        <div className="attribute-wrapper">
                            <Attribute
                                value={props.pkmon["Type 1"]}
                            />
                            {
                                props.pkmon["Type 2"] &&
                                <Attribute
                                    value={props.pkmon["Type 2"]}
                                />
                            }
                        </div>
                    </div>
                    <div className={props.p2?"info-data-p2":"info-data"}>
                        <div className="info-data-bar-wrapper">
                            <div className={props.p2?"info-data-bar-label-row-p2":"info-data-bar-label-row"}>
                                <div className="info-data-bar-label">
                                    HP
                                </div>
                                <div className="info-data-bar-label">
                                    Att
                                </div>
                                <div className="info-data-bar-label">
                                    Def
                                </div>
                                <div className="info-data-bar-label">
                                    Sp.Att
                                </div>
                                <div className="info-data-bar-label">
                                    Sp.Def
                                </div>
                                <div className="info-data-bar-label">
                                    Spd
                                </div>
                            </div>
                            <Bar 
                                data={props.pkmon}
                            />
                            <div className={props.p2?"info-data-bar-data-row-p2":"info-data-bar-data-row"}>
                                <div className="info-data-bar-label">
                                    {props.pkmon.HP}
                                </div>
                                <div className="info-data-bar-label">
                                    {props.pkmon.Attack}
                                </div>
                                <div className="info-data-bar-label">
                                    {props.pkmon.Defense}
                                </div>
                                <div className="info-data-bar-label">
                                    {props.pkmon["Sp. Atk"]}
                                </div>
                                <div className="info-data-bar-label">
                                    {props.pkmon["Sp. Def"]}
                                </div>
                                <div className="info-data-bar-label">
                                    {props.pkmon.Speed}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Bar 
                        data={props.pkmon}
                    /> */}
                    {
                        props.winner &&
                        // <div className={props.p2? "info-winner-p2":"info-winner"}>
                        //     <GiWingedSword/> <div style={{marginLeft:'10px', fontSize:'18px'}}>WINNER</div>
                        // </div>
                        <div className={props.p2? "info-winner-v3-p2":"info-winner-v3"}>
                            <GiWingedSword/> <div style={{ position: 'relative', fontSize:'30px', bottom: '30px'}}>WINNER</div>
                        </div>
                    }
                </div>:null
            }
        </div>
    )
}