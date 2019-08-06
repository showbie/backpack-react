import './ButtonGroup.scss';

import React from 'react';

import PropTypes from 'prop-types';

/**
 * @export
 * @class ButtonGroup
 * @extends React.Component
 */
export default class ButtonGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    appearance: PropTypes.oneOf([
      'default',
      'primary',
      'text',
      'outline',
      'link',
    ]),
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  };

  static defaultProps = {
    orientation: 'horizontal',
  };

  /**
   * Applies the provided `appearance` prop to any Button child
   * components that don't already have an `appearance` prop set.
   *
   * @param {ReactNode} children
   * @param {string} appearance
   * @memberof ButtonGroup
   */
  renderChildren(children, appearance) {
    return children.map((child) => {
      if (child.type.displayName === 'Button' && !child.props.appearance) {
        return React.cloneElement(child, { appearance });
      } else {
        return child;
      }
    });
  }

  render() {
    let {
      children,
      appearance,
      // orientation,
    } = this.props;

    return (
      <div className="button-group">
        {this.renderChildren(children, appearance)}
      </div>
    );
  }
}
