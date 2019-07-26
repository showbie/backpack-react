import './ButtonGroup.scss';

import React from 'react';

import PropTypes from 'prop-types';

/**
 * @todo Would be nice to be able to pass `appearance` to this
 *       component and have that be applied to all `Button` children
 *       automatically.
 * @export
 * @class ButtonGroup
 * @extends React.Component
 */
export default class ButtonGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  };

  static defaultProps = {
    orientation: 'horizontal',
  };

  render() {
    let {
      children,
      // orientation,
    } = this.props;

    return <div className="button-group">{children}</div>;
  }
}
