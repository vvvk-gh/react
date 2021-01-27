import React, { Component } from 'react';

class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    console.log('Lifecycle  B constructor');
  }

static getDerivedStateFromProps(props , state) {
    console.log('Lifecycle  B getDerivedFromProps')
    return null;
}

shouldComponentUpdate(){
  console.log('Lifecycle B should Compenent Update');
  return true;
}

getSnapshotBeforeUpdate(prevProps , prevState){
  console.log('Lifecycle B get snapshot before update');
  return null;
}
 //the return snapshot value will be used in the componentDidUpdate , method
componentDidUpdate(){
  console.log('Lifecycle B Component Did Update')
}

  componentDidMount() {
    console.log('Lifecycle  B Did Mount');
  }

  render() {
    console.log('Lifecycle  B render');
    return <div>Lifecycle  B </div>;
  }
}

export default LifecycleB;