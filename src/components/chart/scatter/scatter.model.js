import objectPath from 'object-path';

export async function onContentEdit (value){
    const result = {...this.state};
    result.content.find( item => item.lang === result.lang).data = value;
    this.setState(result);
}