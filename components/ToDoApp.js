import React from 'react';
import ToDo from './ToDo.js';
import Newitem from './Newitem.js';

export default class ToDoApp extends React.Component{
    constructor() {
        super();
        this.state= {
            list: [
                "get milk",
                "finish homework",
                "code a website"
            ]
        }
    }
    render(){
        return(
            <div>
                <h3>ToDo List App</h3>
                <Newitem />
                <ul>
                    {this.state.list.map((item) => {
                        return <ToDo item={item}/>
                    })}
                </ul>
            </div>
        )
    }
}