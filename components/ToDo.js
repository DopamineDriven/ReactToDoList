import React from 'react';

export default class ToDo extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <li className="list-group-item">
                {this.props.item}
                <button
                    className="badge"
                    onClick={()=>{
                        this.props.onDelete(this.props.toDoId)
                        }}>X</button>
            </li>
        )
    }
}