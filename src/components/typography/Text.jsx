import React from 'react';

import './Text.scss';

export default class extends React.Component {
  render() {
    let { children } = this.props;

    return <span className="text">{children}</span>;
  }
}
