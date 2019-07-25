import React from 'react';

// import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class CheckboxControl extends React.Component {
  static propTypes = {
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
  };

  render() {
    let { isChecked, isDisabled } = this.props;

    return <div>{isChecked ? '✅' : '❌'}</div>;
  }
}
