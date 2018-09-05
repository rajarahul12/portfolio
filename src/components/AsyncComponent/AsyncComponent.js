import React, { Component } from "react";

//Creating a Higher Order Component i.e., a component that returns another component.

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component
      });
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}
