import React, { Component } from "react";

class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    return {
      haserror: true,
    };
  }

  render() {
    if (this.state.haserror) {
      return <h1>Something went wrong</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
