import React from 'react';
import View from './graph.view';
import * as functions from './graph.model';
import { connect } from 'react-redux';

class Graph extends React.Component {

    constructor(props){
        super(props);
        this.state = {
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

export default Graph;
