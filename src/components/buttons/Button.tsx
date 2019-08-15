import './Button.scss';

import React, {
  AllHTMLAttributes,
  Component,
  ReactNode,
  PropsWithChildren,
} from 'react';

import classNames from 'classnames';

type ButtonAppearance = 'default' | 'primary' | 'text' | 'outline' | 'link';
type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps {
  children?: ReactNode;
  a11yLabel?: NativeButtonProps['aria-label'];
  onClick?: NativeButtonProps['onClick'];
  type?: 'button' | 'submit' | 'reset' | undefined;
  appearance?: ButtonAppearance;
  // size?: ButtonSize;
  isDestructive?: boolean;
  isDisabled?: boolean;
  isHovered?: boolean;
  // isRunning?: boolean;
}

export default class Button extends Component<ButtonProps> {
  constructor(props: PropsWithChildren<ReactNode>) {
    super(props);
  }

  static defaultProps = {
    type: 'button',
    isDisabled: false,
  };

  render() {
    const {
      children,
      a11yLabel,
      type,
      appearance,
      // size,
      isDestructive,
      isDisabled,
      isHovered,
      // isRunning,
      onClick,
    } = this.props;
    const buttonClass = classNames({
      button: true,
      [`button--${appearance}`]: appearance !== 'default',
      'is-destructive': isDestructive,
      'is-hovered': isHovered,
    });

    return (
      <button
        className={buttonClass}
        aria-label={a11yLabel}
        type={type}
        disabled={isDisabled}
        onClick={onClick}
      >
        <div className="button-content">{children}</div>
      </button>
    );
  }
}
