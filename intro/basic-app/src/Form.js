import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
             value : '',
        }
    }
    
    changeHandler = (event) =>{
        this.setState({
            value : event.target.value,
        })
    }

    render(){
        return (
            <form>
                <h1>Form</h1>
                <label htmlFor="username">Name </label>
                {/* normal field */}
                {/* <input type="text"/> */}
                {/* controlled fields */}
                <input id="username" type="text" value = {this.state.value} onChange ={this.changeHandler}/>
            </form>
        )
    }
}

export default Form;