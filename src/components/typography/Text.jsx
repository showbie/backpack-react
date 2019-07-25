import './Text.scss';

import React from 'react';

import PropTypes from 'prop-types';

export default class Text extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    let { children } = this.props;

    return <span className="text">{children}</span>;
  }
}
