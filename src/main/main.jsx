import React from 'react';
import View from './main.view';
import * as functions from './main.model';
import { connect } from 'react-redux';


class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            p1:null,
            p2:null,
            winner: null,
            pkmon_list:null,
            pkmon_win_rate: null,
            attribute_win_rate: null,
            scatter_data:null,
            mode: "Battle"
        };
        
        this.functions = {};

        Object.keys(functions).forEach(key => {
            this.functions[key] = functions[key].bind(this);
        })

    };

    async componentWillMount(){
        await this.functions.getData();
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

export default Main;
