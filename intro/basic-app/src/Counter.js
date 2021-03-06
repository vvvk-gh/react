import React , {Component} from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            'count' : 0,
        }
    }

    incrementCounter(){
        //single call 
        // this.setState(
        //     {count : this.state.count + 1 }
        //     ,() =>{
        //         console.log(this.state.count);
        //     })

        //When using mutiple setState calls if you want to change
        //based on previous state instead of object use a function
        this.setState(prevState => ({
            count : prevState.count + 1,
        }))

    }

    // this doesn't work for the as react group the mutiple setState calls into a single update for better peformance
    //To over come this we use prevState .
    incrementByFive(){
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
    }

    render(){
        return (
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick= {() => this.incrementByFive()}>Inc Count</button>
            </div>
        )
    }
}

export default Counter;