import './ButtonGroup.scss';

import React from 'react';

// import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class ButtonGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    // appearance: PropTypes.oneOf(['default', 'primary', 'link']),
  };

  static defaultProps = {
    orientation: 'horizontal',
  };

  render() {
    let {
      children,
      orientation,
      // appearance,
    } = this.props;
    // let buttonClass = classNames({
    //   button: true,
    //   'button--primary': appearance === 'primary',
    //   'button--link': appearance === 'link',
    // });

    return <div className="button-group">{children}</div>;
  }
}
