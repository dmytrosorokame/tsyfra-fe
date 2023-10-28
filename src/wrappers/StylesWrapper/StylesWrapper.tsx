import React, { PropsWithChildren } from "react";
import { useStyles } from "../../hooks/useStyles";
import classes from "./styles.module.scss";

import "../../styles/reset/reset.scss";

const StylesWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const style = useStyles();

  return (
    <main className={classes.container} style={style}>
      {children}
    </main>
  );
};

export default StylesWrapper;
