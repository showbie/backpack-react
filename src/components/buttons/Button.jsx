import './Button.scss';

import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    a11yLabel: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit']),
    appearance: PropTypes.oneOf([
      'default',
      'primary',
      'text',
      'outline',
      'link',
    ]),
    size: PropTypes.string,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isRunning: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    type: 'button',
    isDisabled: false,
  };

  render() {
    let {
      children,
      a11yLabel,
      type,
      appearance,
      // size,
      isDestructive,
      isDisabled,
      // isRunning,
      // onClick,
    } = this.props;
    let buttonClass = classNames({
      button: true,
      [`button--${appearance}`]: appearance !== 'default',
      'is-destructive': isDestructive,
    });

    return (
      <button
        className={buttonClass}
        aria-label={a11yLabel}
        type={type}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }
}
