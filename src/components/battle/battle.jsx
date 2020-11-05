import React from 'react';
import View from './battle.view';
import * as functions from './battle.model';
import { connect } from 'react-redux';

class Battle extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            // data: null
        };
        
        this.functions = {};

        Object.keys(functions).forEach(key => {
            this.functions[key] = functions[key].bind(this);
        })

    };

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

export default Battle;
