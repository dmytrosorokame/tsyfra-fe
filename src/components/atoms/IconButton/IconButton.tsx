import classNames from 'classnames';
import React from 'react';
import { IconButtonSize } from 'src/types/icon-buttons';

import classes from './styles.module.scss';

interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: IconButtonSize;
  isDisabled?: boolean;
}

const IconButton: React.FC<IIconButtonProps> = ({ children, size = IconButtonSize.LARGE, isDisabled, ...rest }) => (
  <button
    className={classNames(classes.container, {
      [classes.small]: size === IconButtonSize.SMALL,
      [classes.large]: size === IconButtonSize.LARGE,
      [classes.disabled]: isDisabled,
    })}
    {...rest}
    disabled={isDisabled}
  >
    {children}
  </button>
);

export default IconButton;
