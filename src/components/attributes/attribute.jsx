import React from 'react';
import View from './attribute.view';
import * as functions from './attribute.model';
import { connect } from 'react-redux';

class Attibute extends React.Component {

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

export default Attibute;
