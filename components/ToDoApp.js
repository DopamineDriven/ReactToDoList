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
        this.deleteItem = this.deleteItem.bind(this)
    }
    // when addItem function is claled we want to update state of list
    addItem(item) {
        let newList = this.state.list
        newList.push(item)
        this.setState({
            list: newList
        })
    }

    deleteItem(index) {
        let newList = this.state.list
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }


    render(){
        return(
            <div>
                <h3 className="text-center">ToDo List App</h3>
                <Newitem addItem={this.addItem}/>
                <br/>
                <ul className="list-group">
                    {this.state.list.map((item, index) => {
                        return <ToDo 
                            toDoId={index}
                            onDelete={this.deleteItem}
                            key={index} item={item}/>
                    })}
                </ul>
            </div>
        )
    }
}