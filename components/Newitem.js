import React from 'react';

export default class Newitem extends React.Component{
    constructor(){
        super();

        this.state={
            text: ''
        }
        // pre-binds preventing from having to bind multiple times
        this.updateText = this.updateText.bind(this)
    }

    updateText(e) {
        this.setState({
            text: e.target.value
        })
    }


    render(){
        return(
            <div>
                <input 
                    onChange={this.updateText}
                    type="text"/>
                <button
                    onClick={()=>{this.props.addItem(this.state.text)}}
                >Add Item</button>
            </div>
        )
    }
}