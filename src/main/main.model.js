import objectPath from 'object-path';
import $ from "jquery";
import pkmonData from '../resources/json/gen/pokemon.json';
import pkmonWinRate from '../resources/json/gen/win_rate.json';
import attributeWinRate from '../resources/json/gen/attribute_win_rate.json';

export async function onchange ( value, dataPath ) {
    let result = {...this.state};
    objectPath.set(result, dataPath, value);
    return this.setState(result);
}

export async function DataUpdata( result, dataPath, value ){
    objectPath.set(result, dataPath, value);
    return result;
}

export async function getData (){
    let result = {...this.state};
    result.p1 = pkmonData[1];
    result.pkmon_list = pkmonData;
    result.pkmon_win_rate = pkmonWinRate;
    result.attribute_win_rate = attributeWinRate;

    let scatter_data = {
        datasets: [
            {
                data: [],
                backgroundColor: []
            },
        ]
    };
    
    pkmonWinRate.forEach( element =>{
            scatter_data.datasets[0].data.push({ x: element.Total, y: element.WinRate, index:element['#']});
            scatter_data.datasets[0].backgroundColor.push(
                element["#"] == 1? "#FF0000":"rgba(146, 213, 230, 0.2)"
            )
        }  
    );

    result.scatter_data = scatter_data;

    return this.setState(result);
}

export async function onP1SelectorChange ( pkmon ){
    let result = {...this.state};
    result.p1 = pkmonData[pkmon];

    let colorArray = [];
    
    pkmonWinRate.forEach( element =>{
            colorArray.push(
                element["#"] == pkmon? "#FF0000":"rgba(146, 213, 230, 0.2)"
            )
        }  
    );

    result.scatter_data.datasets[0].backgroundColor = colorArray;

    if( result.p1 && result.p2 ){
        await $.getJSON(`json/indi/${result.p1["#"]}.json`, function(data) {
            if(data.filter( item => item.p2 == result.p2["#"])[0].winner == result.p1["#"]){
                result.winner = "p1"
            }else{
                result.winner = "p2"
            }
        });
    }
    
    return this.setState(result);
}

export async function onP2SelectorChange ( pkmon ){
    let result = {...this.state};
    result.p2 = pkmonData[pkmon];
    if( result.p1 && result.p2 ){
        await $.getJSON(`json/indi/${result.p1["#"]}.json`, function(data) {
            if(data.filter( item => item.p2 == result.p2["#"])[0].winner == result.p1["#"]){
                result.winner = "p1"
            }else{
                result.winner = "p2"
            }
        });
    }
    return this.setState(result);
}

export async function selectMode( mode ){
    let result = {...this.state};
    result.mode = mode;
    result.p2 = null;
    result.winner = null;
    return this.setState(result);
}

// export async function getWinner (){
//     let result = {...this.state};
//     if( result.p1 && result.p2 ){
//         $.getJSON(`json/indi/${result.p1["#"]}.json`, function(data) {
//             if(data.filter( item => item.p2 == result.p2["#"]).winner == result.p1["#"])
//                 result.winner = "p1"
//             else
//                 result.winner = "p2"
//         });
//     }
//     return this.setState(result);
// }

// 'json/gen/pokemon.json'

// function onChange(value) {
//     console.log(`selected ${value}`);
//   }
  
//   function onSearch(val) {
//     console.log('search:', val);
//   }