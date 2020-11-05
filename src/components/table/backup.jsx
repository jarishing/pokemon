// import React from 'react';
// import './table.css';

// import { Table, Tag, Space } from 'antd';

// const { Column, ColumnGroup } = Table;

// const data = [
//     {
//         "#": 1,
//         "WinRate": 21.53,
//         "WinRank": 623,
//         "Total": 318,
//         "TotalRank": 627,
//         "WinDiff": -6.83,
//         "DiffRank": 495
//       },
//       {
//         "#": 2,
//         "WinRate": 39.17,
//         "WinRank": 449,
//         "Total": 405,
//         "TotalRank": 467,
//         "WinDiff": -6.11,
//         "DiffRank": 480
//       },
//       {
//         "#": 3,
//         "WinRate": 61.33,
//         "WinRank": 259,
//         "Total": 525,
//         "TotalRank": 162,
//         "WinDiff": 1.24,
//         "DiffRank": 388
//       },
//       {
//         "#": 4,
//         "WinRate": 61.45,
//         "WinRank": 256,
//         "Total": 625,
//         "TotalRank": 42,
//         "WinDiff": -12.6,
//         "DiffRank": 586
//       },
//       {
//         "#": 5,
//         "WinRate": 37.3,
//         "WinRank": 475,
//         "Total": 309,
//         "TotalRank": 652,
//         "WinDiff": 10.06,
//         "DiffRank": 264
//       },
//       {
//         "#": 6,
//         "WinRate": 56.7,
//         "WinRank": 303,
//         "Total": 405,
//         "TotalRank": 467,
//         "WinDiff": 11.42,
//         "DiffRank": 237
//       },
//       {
//         "#": 7,
//         "WinRate": 80.98,
//         "WinRank": 106,
//         "Total": 534,
//         "TotalRank": 144,
//         "WinDiff": 19.11,
//         "DiffRank": 159
//       },
//       {
//         "#": 8,
//         "WinRate": 82.48,
//         "WinRank": 88,
//         "Total": 634,
//         "TotalRank": 36,
//         "WinDiff": 8.07,
//         "DiffRank": 302
//       },
//       {
//         "#": 9,
//         "WinRate": 82.23,
//         "WinRank": 91,
//         "Total": 634,
//         "TotalRank": 36,
//         "WinDiff": 7.82,
//         "DiffRank": 306
//       },
//       {
//         "#": 10,
//         "WinRate": 18.9,
//         "WinRank": 664,
//         "Total": 314,
//         "TotalRank": 636,
//         "WinDiff": -8.93,
//         "DiffRank": 523
//       }
//   ];

// export default props => {

//     const columns = [
//         {
//             title: 'Rank',
//             dataIndex: 'WinRank',
//             defaultSortOrder: 'ascend',
//             sorter: (a, b) => a['WinRank'] - b['WinRank'],
//             width: '20%',
//             align: 'center'
//         },
//         {
//             title: 'Pokemon',
//             dataIndex: '#',
//             // render: () => <img style={{width: "40px", padding: "5px 0"}} src={`/images/1.png`}/>,
//             width: '40%',
//             align: 'center'
//         },
//         {
//             title: 'Win Rate',
//             dataIndex: 'WinRate',
//             width: '40%',
//             align: 'center'
//         }
//     ]

//     return (
//         <Table 
//             title={
//                 () => 
//                 <div className="pkmon-table-title-wrapper" style={{color:"#1D91D0"}}>
//                     <div className="pkmon-table-title">
//                         Win Rate Table
//                     </div>
//                     <div className="pkmon-table-header-wrapper" style={}>
//                         <div className="pkmon-table-header" style={{width:'20%', paddingRight:'25px'}}>
//                             Rank
//                         </div>
//                         <div className="pkmon-table-header" style={{width:'40%'}}>

//                         </div>
//                         <div className="pkmon-table-header" style={{width:'40%', paddingLeft:'30px'}}>
//                             Win Rate (%)
//                         </div>
//                     </div>
//                 </div>
//             }
//             showHeader={false}
//             dataSource={data}
//             columns={columns}
//             pagination={false}
//             scroll={{ y: 250 }}
//             width={400}
//             rowClassName={
//                 (record, index) => (index === 5 ? 'scroll-row' : '')
//             }
//         />
//     )
// }




// import React from 'react';
// import './table.css';

// import { Table, Tag, Space } from 'antd';

// const { Column, ColumnGroup } = Table;

// export default props => {

//     console.log("---------------------------");
//     console.log(props);

    

//     const columns = [
//         // {
//         //     title: 'Rank',
//         //     dataIndex: props.rankType,
//         //     defaultSortOrder: 'ascend',
//         //     sorter: (a, b) => a[props.rankType] - b[props.rankType],
//         //     width: '20%',
//         //     align: 'center'
//         // },
//         // {
//         //     title: 'Pokemon',
//         //     dataIndex: '#',
//         //     // render: () => <img style={{width: "40px", padding: "5px 0"}} src={`/images/1.png`}/>,
//         //     width: '40%',
//         //     align: 'center'
//         // },
//         // {
//         //     title: props.title,
//         //     dataIndex: props.dataType,
//         //     width: '40%',
//         //     align: 'center'
//         // }
//     ]

//     return (
//         <div>
//             hello
//         </div>
//         // <Table 
//         //     // title={
//         //     //     () => 
//         //     //     <div className="pkmon-table-title-wrapper" style={{color:props.color}}>
//         //     //         <div className="pkmon-table-title">
//         //     //             Win Rate Table
//         //     //         </div>
//         //     //         <div className="pkmon-table-header-wrapper" style={{borderColor:props.color}}>
//         //     //             <div className="pkmon-table-header" style={{width:'20%', paddingRight:'25px'}}>
//         //     //                 Rank
//         //     //             </div>
//         //     //             <div className="pkmon-table-header" style={{width:'40%'}}>

//         //     //             </div>
//         //     //             <div className="pkmon-table-header" style={{width:'40%', paddingLeft:'30px'}}>
//         //     //                 Win Rate (%)
//         //     //             </div>
//         //     //         </div>
//         //     //     </div>
//         //     // }
//         //     showHeader={false}
//         //     dataSource={props.data}
//         //     columns={columns}
//         //     pagination={false}
//         //     scroll={{ y: 250 }}
//         //     width={400}
//         //     // rowClassName={
//         //     //     (record, index) => (index === parseInt(props.pkmon) ? 'scroll-row' : '')
//         //     // }
//         // />
//     )
// }
