import React , {Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1>Welcome to my app, {this.props.name} sorry {this.props.heroName}</h1>
    }
}

export default Welcome;