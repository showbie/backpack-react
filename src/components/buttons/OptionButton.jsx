import './OptionButton.scss';

import React from 'react';

import PropTypes from 'prop-types';

import Button from './Button';

export default class OptionButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    let { children, ...props } = this.props;

    return (
      <Button {...props}>
        <div className="button-content">{children}</div>
      </Button>
    );
  }
}
