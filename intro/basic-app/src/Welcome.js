import React , {Component} from 'react'

class Welcome extends Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    render(){
        return <h1>Welcome to my app, {this.props.name} sorry {this.props.heroName}</h1>
    }
}

export default Welcome;