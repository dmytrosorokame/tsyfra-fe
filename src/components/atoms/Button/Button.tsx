import React from "react";

import classes from "./styles.module.scss";
import cn from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: React.ReactNode;
  isPrimary?: boolean;
  isOutlined?: boolean;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  Icon,
  isOutlined,
  isDisabled,
  ...rest
}) => (
  <button
    className={cn(classes.container, {
      [classes.outlined]: isOutlined,
      [classes.disabled]: isDisabled,
    })}
    {...rest}
    disabled={isDisabled}
  >
    {Icon && <div className={classes.icon}>{Icon}</div>}

    <span className={classes.label}>{children}</span>
  </button>
);

export default Button;
