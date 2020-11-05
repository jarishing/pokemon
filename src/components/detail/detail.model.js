import objectPath from 'object-path';
import pkmonWinRate from '../../resources/json/gen/win_rate.json';
import attributeWinRate from '../../resources/json/gen/attribute_win_rate.json';

export async function onContentEdit (value){
    const result = {...this.state};
    result.content.find( item => item.lang === result.lang).data = value;
    this.setState(result);
}

export async function getData ( pkmon ){
    let result = {...this.state};
    result.selected = pkmon;
    // result.pkmon_win_rate = pkmonWinRate;
    // result.attribute_win_rate = attributeWinRate;
    this.setState(result);
}

export async function updateData ( pkmon ){
    let result = {...this.state};
    result.selected = pkmon;
    this.setState(result);
}

// selected: null,
// pkmon_win_rate: null,
// attribute_win_rate: null