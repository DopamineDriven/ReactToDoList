import React from 'react';

export default class ToDo extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <li>{this.props.item}</li>
        )
    }
}