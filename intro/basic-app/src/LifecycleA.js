import React, { Component } from 'react';
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Default state',
    };
    console.log('LifeCycle A constructor');
  }


  changeHandler = () => {
    this.setState({value:'Changed the state'})
  }

static getDerivedStateFromProps(props , state) {
    console.log('Lifecycle A getDerivedFromProps')
    return null;
}

shouldComponentUpdate(nextProps , nextState) {
  console.log('Lifecycle A should Compenent Update');
  return true;
}

getSnapshotBeforeUpdate(prevProps , prevState){
  console.log('Lifecycle A get snapshot before update');
  return null;
}

 //the return snapshot value will be used in the componentDidUpdate , method
componentDidUpdate(prevProps , prevState , snapshot){
  console.log('Lifecycle A Component Did Update')
}

  componentDidMount() {
    console.log('Lifecycle A Did Mount');
  }

  render() {
    console.log('Lifecycle A render');
    return (
    <div>
       <div>Lifecycle A</div>
        <button onClick={this.changeHandler}>Update State</button>
        <LifecycleB />
    </div>
        );
  }
}

export default LifecycleA;