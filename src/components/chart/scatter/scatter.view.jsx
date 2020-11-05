import React from 'react';
import { Scatter } from 'react-chartjs-2';

export default props => {

    // const data = {
    //     datasets: [
    //         {
    //             data: [],
    //             backgroundColor: []
    //         },
    //     ]
    // }

    const options = {
        legend: {
            display: false
        },
        scales: {
            xAxes: [
                {
                    ticks: {
                        min: 150
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Species strength'
                    }
                },
            ],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Win Rate'
                    }
                },
            ]
        },  
    }


    return (
        <div>
            <Scatter 
                data={props.data} 
                options={options} 
                height={230}
            />
        </div>
    )
}

// {
//     data: [
//         { x: 318, y: 21.53 ,index:1 },
//         { x: 405, y: 39.17 ,index:2 },
//         { x: 525, y: 61.33 ,index:3 },
//         { x: 625, y: 61.45 ,index:4 },
//         { x: 309, y: 37.3 ,index:5 },
//         { x: 405, y: 56.7 ,index:6 },
//         { x: 534, y: 80.98 ,index:7 },
//         { x: 634, y: 82.48 ,index:8 },
//         { x: 634, y: 82.23 ,index:9 },
//         { x: 314, y: 18.9 ,index:10 },
//         { x: 405, y: 36.67 ,index:11 },
//         { x: 530, y: 60.45 ,index:12 },
//         { x: 630, y: 60.95 ,index:13 },
//         { x: 195, y: 16.9 ,index:14 },
//     ],
//     backgroundColor: 
//     ["red", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
//     },