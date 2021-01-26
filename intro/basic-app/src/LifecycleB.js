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

  componentDidMount() {
    console.log('Lifecycle  B Did Mount');
  }

  render() {
    console.log('Lifecycle  B render');
    return <div>Lifecycle  B </div>;
  }
}

export default LifecycleB;