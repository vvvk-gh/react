import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
             username : '',
             optionValue : '',
        }
    }
    

    changeHandler = (event) =>{
        this.setState({
            username : event.target.value,
        })
    }

    selectHandler = event =>{
        this.setState({
            optionValue : event.target.value,
        })
    }

    sumbitHandler = event => {
        alert(`${this.state.username} ${this.state.optionValue}`)
    }
    render(){
        const { username , optionValue} = this.state;

        return (
            <form onSubmit={this.sumbitHandler}>
                <h1>Form</h1>
                {/* normal field */}
                {/* <input type="text"/> */}

                <div>
                <label htmlFor="username">Name </label>
                {/* controlled fields */}
                <input id="username" type="text" value = {username} onChange ={this.changeHandler}/>
                </div>

                <div>
                    <select value = {optionValue} onChange={this.selectHandler}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>

                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default Form;