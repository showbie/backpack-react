import React from 'react';

export default class Button extends React.Component {
  static defaultProps = {
    type: 'button',
    isDisabled: false,
  };

  render() {
    let {
      children,
      a11yLabel,
      type,
      // appearance,
      // size,
      isDisabled,
      // isRunning,
      // onClick,
    } = this.props;

    return (
      <button
        className=""
        aria-label={a11yLabel}
        type={type}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }
}
