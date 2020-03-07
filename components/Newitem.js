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

    // in html when you create a form with an input element
    // when hitting enter, the submit button is automatically clicked
    // use form!!!
    render(){
        return(
            <form>
                <input 
                    value = {this.state.text}
                    onChange={this.updateText}
                    type="text"/>
                <input
                    type = "submit"
                    value = "add item"
                    onClick={(e)=>{
                        e.preventDefault()
                        this.props.addItem(this.state.text)
                        this.setState({ text: ' ' })
                    }}
                />
            </form>
        )
    }
}