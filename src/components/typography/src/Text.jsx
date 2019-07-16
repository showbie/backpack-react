import React from 'react';

export default class extends React.Component {
  render() {
    let { children } = this.props;

    return <span>{children}</span>;
  }
}
