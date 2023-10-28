import React from "react";

import classes from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: React.FC;
  isPrimary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, Icon, ...rest }) => (
  <button className={classes.container} {...rest}>
    {Icon && (
      <div className={classes.icon}>
        <Icon />
      </div>
    )}

    <span className={classes.label}>{children}</span>
  </button>
);

export default Button;
