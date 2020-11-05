import React from 'react';
import './table.css';
import { Table, Tag, Space } from 'antd';

import Attribute from '../attributes/attribute';

// const { Column, ColumnGroup } = Table;

export default props => {
    console.log("----------------attribute---------------------------");
    console.log(props);

    const columns = [
        {
            title: 'Rank',
            dataIndex: props.rankType,
            defaultSortOrder: 'ascend',
            sorter: (a, b) => a[props.rankType] - b[props.rankType],
            width: '20%',
            align: 'center'
        },
        {
            title: 'Type',
            dataIndex: 'Type',
            render: (text) =>  <div style={{height:"50px", display:'flex', alignItems:'center'}}><Attribute value={text}/></div>,
            width: '40%',
            align: 'center'
        },
        {
            title: props.title,
            dataIndex: props.dataType,
            width: '40%',
            align: 'center'
        }
    ]

    return (
        <Table 
            title={
                () => 
                <div className="pkmon-table-title-wrapper" style={{color:props.color}}>
                    <div className="pkmon-table-title">
                        {props.title} Table
                    </div>
                    <div className="pkmon-table-header-wrapper" style={{borderColor:props.color}}>
                        <div className="pkmon-table-header" style={{width:'20%', paddingRight:'25px'}}>
                            Rank
                        </div>
                        <div className="pkmon-table-header" style={{width:'40%'}}>

                        </div>
                        <div className="pkmon-table-header" style={{width:'40%', paddingLeft:'30px'}}>
                          {props.subtitle} (%)
                        </div>
                    </div>
                </div>
            }
            showHeader={false}
            dataSource={props.data}
            columns={columns}
            pagination={false}
            scroll={{ y: 250 }}
            width={400}
            rowClassName={
                (record, index) => 
                (record.Type === props.data.filter(item => item.Type == props.attribute)[0].Type? `scroll-row-${props.rankType} hightlight` : '')
            }
        />
    )
}





{/* <Table 
            dataSource={data}
            columns={columns}
            pagination={false}
            scroll={{ y: 240 }}
            rowClassName={
                // (record, index) => (index === 5 ? 'scroll-row' : '')
            }
        /> */}

// function getTrProps= (state, rowInfo, column) => {
//     if (rowInfo.original.labelField === highlightGraphic.attributes[labelField]) {
//         this.handleScroll();
//     }
//     return {
//         onClick: (e, t) => {
//             this.onRowClick(e, t, rowInfo);
//         },
//         style: {
//             background: highlightGraphic !== null ? rowInfo.original.labelField === highlightGraphic.attributes[labelField] ? '#458BE7' : null : null,
//         },
//         className:rowInfo.original.labelField === highlightGraphic.attributes[labelField] ? 'scroll-row' : ''
//     };
// }


{/* <ColumnGroup title="Name">
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
            </ColumnGroup>
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={tags => (
                    <>
                    {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                        {tag}
                        </Tag>
                    ))}
                    </>
                )}
            />
            <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                    <a>Invite {record.lastName}</a>
                    <a>Delete</a>
                    </Space>
                )}
            /> */}