import React from 'react';

export default class HeartBeat extends React.Component {
  render() {
    return null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      fetch('/api/v1/heartbeat');
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}
