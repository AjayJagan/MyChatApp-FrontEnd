import React from 'react';

class WebSocket extends React.Component {
  componentDidMount() {
    this.props.connectSocket();
  }

  render() {
    return this.props.children;
  }
}

export default WebSocket;