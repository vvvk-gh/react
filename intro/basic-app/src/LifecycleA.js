import React, { Component } from 'react';
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    console.log('LifeCycle A constructor');
  }

static getDerivedStateFromProps(props , state) {
    console.log('Lifecycle A getDerivedFromProps')
    return null;
}

  componentDidMount() {
    console.log('Lifecycle A Did Mount');
  }

  render() {
    console.log('Lifecycle A render');
    return (
    <div>
       <div>Lifecycle A</div>
        <LifecycleB />
    </div>
        );
  }
}

export default LifecycleA;