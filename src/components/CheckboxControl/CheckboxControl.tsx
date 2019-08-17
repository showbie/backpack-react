import './CheckboxControl.scss';

import React, { Component } from 'react';

import classNames from 'classnames';

interface CheckboxProps {
  isChecked?: boolean;
  isDisabled?: boolean;
}

export default class CheckboxControl extends Component<CheckboxProps> {
  render() {
    const { isChecked, isDisabled } = this.props;
    const checkboxClass = classNames({
      checkbox: true,
      'is-checked': isChecked,
      'is-disabled': isDisabled,
    });

    return (
      <svg className={checkboxClass}>
        <g className="checkbox__background">
          <path
            className="checkbox__outline"
            d="M11 1c5.51 0 10 4.49 10 10s-4.49 10-10 10S1 16.51 1 11 5.49 1 11 1m0-1C4.92 0 0 4.92 0 11s4.92 11 11 11 11-4.92 11-11S17.08 0 11 0z"
          />
          <circle className="checkbox__fill" cx="11" cy="11" r="11" />
        </g>
        <path className="check" d="M5.5 10.5l3 3L16 6l1 1-8.5 8.5-4-4 1-1z" />
        <g className="cross">
          <path d="M6 14.93L14.93 6 16 7.07 7.07 16 6 14.93z" />
          <path d="M6 7.07L7.07 6 16 14.93 14.93 16 6 7.07z" />
        </g>
      </svg>
    );
    // return <div>{isChecked ? '✅' : '❌'}</div>;
  }
}
