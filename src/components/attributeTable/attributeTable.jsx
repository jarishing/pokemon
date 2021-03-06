import React from 'react';
import View from './attributeTable.view';
import * as functions from './attributeTable.model';
import { connect } from 'react-redux';
import scrollIntoView from 'scroll-into-view';

class AttributeTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };
        
        this.functions = {};

        Object.keys(functions).forEach(key => {
            this.functions[key] = functions[key].bind(this);
        })

    };

    async componentDidMount(){
        scrollIntoView(document.querySelector(`.scroll-row-${this.props.rankType}`), {
            time: 10,
            align: {
              top: 0
            },
        });
    }

    async componentDidUpdate(prevProps){
        if(this.props.attribute != prevProps.attribute){
            scrollIntoView(document.querySelector(`.scroll-row-${this.props.rankType}`), {
                time: 10,
                align: {
                    top: 0
                },
            });
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

export default AttributeTable;
