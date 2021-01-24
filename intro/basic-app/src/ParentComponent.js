import React , {Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : 'Parent',
        }
    }

    getAlert = (value) =>{
        alert(`Alerting ${this.state.name} from ${value}`)
    }

    render(){
        return(
            <div>
                <ChildComponent getParent = {this.getAlert} />
            </div>
        )
    }
}

export default ParentComponent;