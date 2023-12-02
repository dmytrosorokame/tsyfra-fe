import React from 'react';
import Navigation from 'src/components/organisms/Navigation/Navigation';

import classes from './styles.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className={classes.main}>
      <Navigation />
    </div>
  );
};

export default MainPage;
