import React from 'react';
import { Radar } from 'react-chartjs-2';

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scale: {
      ticks: { 
        beginAtZero: true,
      },
      pointLabels: {
        fontSize: 15
      }
    },
    legend: {
        labels: {
            fontSize: 14,
            marginBottom: 200
        }
    }
  }
  

export default props => {

  // const data = {
  //   labels: ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
  //   datasets: [
  //     {
  //       label: '# of Votes',
  //       data: [2, 9, 3, 5, 2, 3],
  //       backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //       borderColor: 'rgba(255, 99, 132, 1)',
  //       borderWidth: 1,
  //     },
  //   ],
  // }

    return (
        <div>
          {
            props.data &&
            <Radar 
                data={props.data} 
                width={620}
                height={500}
                options={options} 
            />
          }
        </div>
    )
}