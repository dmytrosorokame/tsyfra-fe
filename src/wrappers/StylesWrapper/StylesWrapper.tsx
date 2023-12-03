import React, { PropsWithChildren } from 'react';
import { useStyles } from 'src/hooks/useStyles';

import classes from './styles.module.scss';

import 'src/styles/reset/reset.scss';
import 'swiper/css';

const StylesWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const style = useStyles();

  return (
    <main className={classes.container} style={style}>
      {children}
    </main>
  );
};

export default StylesWrapper;
