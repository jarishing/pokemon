import React from 'react';
import View from './radar.view';
import * as functions from './radar.model';
import { connect } from 'react-redux';

class Radar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data:{
                labels: ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
                datasets: []
            }
        };
        
        this.functions = {};

        Object.keys(functions).forEach(key => {
            this.functions[key] = functions[key].bind(this);
        })

    };

    async componentWillMount(){
        await this.functions.getData(this.props.p1, null);
    };

    async componentDidUpdate(prevProps){
        if(this.props.p1 != prevProps.p1 || this.props.p2 != prevProps.p2){
            this.functions.getData(this.props.p1, this.props.p2);
        }
    }

    render(){
        return (
            <View 
                { ... this.functions }
                { ... this.props }
                { ... this.state }
            />
        );
    };
};

const mapStateToProps = ( state, ownProps ) => {
    return ({
    });
  }
  
const mapDispatchToProps = ( dispatch, ownProps ) => ({
}); 

export default Radar;
