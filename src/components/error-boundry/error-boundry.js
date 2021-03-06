import React, { Component } from 'react';
import ErrorIndicator from '../eror-indicator';


export default class ErrorBoudry extends Component {

  state = {
      hasError: false
  };

  componentDidCatch() {
      this.setState({hasError: true})
  };

  render() {
      if(this.state.hasError) {
          return <ErrorIndicator />
      }
      return(
          this.props.children
      );
  };
};