import React from 'react';
import { toast } from 'react-toastify';

class ErrorBoundary extends React.Component {
  state = {
    error: '',
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? toast.error() : this.props.children;
  }
}

export default ErrorBoundary;
