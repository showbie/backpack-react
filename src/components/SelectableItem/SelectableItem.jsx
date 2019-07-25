import './SelectableItem.scss';

import React, { createContext } from 'react';

// import classNames from 'classnames';
import PropTypes from 'prop-types';

import CheckboxControl from '../CheckboxControl/CheckboxControl';

const SelectableContext = createContext();
const SelectableCheckbox = () => (
  <SelectableContext.Consumer>
    {({ checked, disabled }) => (
      <CheckboxControl
        className="selectable-item__control"
        isChecked={checked}
        isDisabled={disabled}
      />
    )}
  </SelectableContext.Consumer>
);

/**
 *
 * @export
 * @class SelectableItem
 * @extends React.Component
 */
export default class SelectableItem extends React.Component {
  static Checkbox = SelectableCheckbox;

  static propTypes = {
    children: PropTypes.node,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  state = {
    checked: this.props.checked,
    disabled: this.props.disabled,
  };

  updateChecked = (event) => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    let { children } = this.props;
    // let { updateChecked } = this;

    return (
      <label className="selectable-item">
        <SelectableContext.Provider value={this.state}>
          {children}
          <input
            className="selectable-item__input"
            type="checkbox"
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.updateChecked}
          />
        </SelectableContext.Provider>
      </label>
    );
  }
}
