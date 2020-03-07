import React from 'react';

export default class Newitem extends React.Component{
    constructor(){
        super();

        this.state={
            text: ''
        }
        // pre-binds preventing from having to bind multiple times
        this.updateText = this.updateText.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateText(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        if(this.state.text==='') {
            return
        }
        this.props.addItem(this.state.text)
        this.setState({ text: ' ' })
    }

    // in html when you create a form with an input element
    // when hitting enter, the submit button is automatically clicked
    // use form!!!
    render(){
        return(
            <form className="input-group">
                <input
                    className="form-control"
                    value = {this.state.text}
                    onChange={this.updateText}
                    type="text"/>
                <span className="input-group-btn">
                    <input
                        className="btn btn-default"
                        type = "submit"
                        value = "add item"
                        onClick={this.handleSubmit}
                    />
                </span>
            </form>
        )
    }
}