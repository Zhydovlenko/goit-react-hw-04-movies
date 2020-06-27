import React from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class ErrorBoundary extends React.Component {
  state = {
    error: '',
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    return this.state.hasError
      ? toast.error(`Something went wrong...`)
      : this.props.children;
  }
}

export default ErrorBoundary;
