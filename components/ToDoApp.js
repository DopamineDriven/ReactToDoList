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
        this.addItem = this.addItem.bind(this)
    }
    // when addItem function is claled we want to update state of list
    addItem(item) {
        let newList = this.state.list
        newList.push(item)
        this.setState({
            list: newList
        })
    }


    render(){
        return(
            <div>
                <h3>ToDo List App</h3>
                <Newitem addItem={this.addItem}/>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <ToDo key={index} item={item}/>
                    })}
                </ul>
            </div>
        )
    }
}