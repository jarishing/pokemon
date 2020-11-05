import objectPath from 'object-path';

export async function onContentEdit (value){
    const result = {...this.state};
    result.content.find( item => item.lang === result.lang).data = value;
    this.setState(result);
}

export async function getData ( p1, p2 ){
    let result = {...this.state};
    let temp = [];
    if( p1 ){
        temp.push({
            label: p1.Name,
            data: [ 
                parseInt(p1.HP), 
                parseInt(p1.Attack), 
                parseInt(p1.Defense), 
                parseInt(p1["Sp. Atk"]), 
                parseInt(p1["Sp. Def"]), 
                parseInt(p1.Speed)
            ],
            backgroundColor: 'rgba(29, 145, 208, 0.2)',
            borderColor: '#1D91D0',
            borderWidth: 1,
        })
    }
    if( p2 ){
        temp.push({
            label: p2.Name,
            data: [ 
                parseInt(p2.HP), 
                parseInt(p2.Attack), 
                parseInt(p2.Defense), 
                parseInt(p2["Sp. Atk"]), 
                parseInt(p2["Sp. Def"]), 
                parseInt(p2.Speed)
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            // #c51147
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        })
    }

    result.data.datasets = temp;
    return this.setState(result);
}