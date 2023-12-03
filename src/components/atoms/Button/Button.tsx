import cn from 'classnames';
import React from 'react';
import { ButtonSize } from 'src/types/buttons';

import classes from './styles.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: React.ReactNode;
  size?: ButtonSize;
  isPrimary?: boolean;
  isOutlined?: boolean;
  isShadowed?: boolean;
  isDisabled?: boolean;
  isIconRight?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  Icon,
  size = ButtonSize.LARGE,
  isOutlined,
  isShadowed,
  isDisabled,
  isIconRight,
  ...rest
}) => (
  <button
    className={cn(classes.container, {
      [classes.outlined]: isOutlined,
      [classes.disabled]: isDisabled || isShadowed,
      [classes.small]: size === ButtonSize.SMALL,
    })}
    {...rest}
    disabled={isDisabled}
  >
    {Icon && !isIconRight && <div className={classes.icon}>{Icon}</div>}

    <span className={classes.label}>{children}</span>

    {Icon && isIconRight && <div className={classes.icon}>{Icon}</div>}
  </button>
);

export default Button;
