import React from 'react';
import ToDo from './ToDo.js';
import Newitem from './Newitem.js';

export default class ToDoApp extends React.Component{
    render(){
        return(
            <div>
                hello there
                <Newitem />
                <ToDo />
            </div>
        )
    }
}