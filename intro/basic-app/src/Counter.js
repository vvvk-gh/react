import React , {Component} from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            'count' : 0,
        }
    }

    incrementCounter(){
        this.setState(
            {count : this.state.count + 1 }
            ,() =>{
                console.log(this.state.count);
            })
    }

    render(){
        return (
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick= {() => this.incrementCounter()}>Inc Count</button>
            </div>
        )
    }
}

export default Counter;