import classNames from 'classnames';
import React from 'react';
import { ButtonSize } from 'src/types/buttons';

import classes from './styles.module.scss';

interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  isDisabled?: boolean;
}

const IconButton: React.FC<IIconButtonProps> = ({ children, size = ButtonSize.LARGE, isDisabled, ...rest }) => (
  <button
    className={classNames(classes.container, {
      [classes.small]: size === ButtonSize.SMALL,
      [classes.large]: size === ButtonSize.LARGE,
      [classes.disabled]: isDisabled,
    })}
    {...rest}
    disabled={isDisabled}
  >
    {children}
  </button>
);

export default IconButton;
