import React from 'react';
import View from './detail.view';
import * as functions from './detail.model';
import { connect } from 'react-redux';

class Detail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selected: null,
            pkmon_win_rate: this.props.pkmon_win_rate,
            attribute_win_rate: this.props.attribute_win_rate
        };
        
        this.functions = {};

        Object.keys(functions).forEach(key => {
            this.functions[key] = functions[key].bind(this);
        })

    };

    async componentWillMount(){
        await this.functions.getData(this.props.selected);
    };

    async componentDidUpdate(prevProps){
        if(this.props.selected != prevProps.selected){
            // this.functions.getData(this.props.selected);
            await this.functions.updateData(this.props.selected);
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

export default Detail;
