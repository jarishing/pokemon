import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

export default props => {
    console.log("--------------------------");
    console.log(props);

    const data = {
        labels: ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
        datasets: [
          {
            data: [ 
                parseInt(props.data.HP), 
                parseInt(props.data.Attack), 
                parseInt(props.data.Defense), 
                parseInt(props.data["Sp. Atk"]), 
                parseInt(props.data["Sp. Def"]), 
                parseInt(props.data.Speed)
            ],
            backgroundColor: [
                'rgba(0,112,74, 0.2)',
                'rgba(0,112,74, 0.2)',
                'rgba(0,112,74, 0.2)',
                'rgba(0,112,74, 0.2)',
                'rgba(0,112,74, 0.2)',
                'rgba(0,112,74, 0.2)',
            ],
            borderColor: [
                'rgba(0,112,74, 1)',
                'rgba(0,112,74, 1)',
                'rgba(0,112,74, 1)',
                'rgba(0,112,74, 1)',
                'rgba(0,112,74, 1)',
                'rgba(0,112,74, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
      
      const options = {
        legend: {
            display: false
        },
        scales: {
            xAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 200
                    },
                    display: false,
                },
            ],
          yAxes: [
            {
                display: false,
                ticks: {
                    beginAtZero: true,
                }
            },
          ],
        },
      }
      
    return (
        <div>

            <HorizontalBar 
                data={data} 
                options={options} 
                width={170}
            />
        </div>
    )
}