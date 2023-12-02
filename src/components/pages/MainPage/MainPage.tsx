import React from 'react';
import Navigation from 'src/components/organisms/Navigation/Navigation';
import PostsSlider from 'src/components/organisms/PostsSlider';

import classes from './styles.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className={classes.main}>
      <Navigation />

      <div className={classes.section}>
        <PostsSlider title="Popular Posts" />
      </div>

      <div className={classes.section}>
        <PostsSlider title="Popular Posts" />
      </div>

      <div className={classes.section}>
        <PostsSlider title="Popular Posts" />
      </div>
    </div>
  );
};

export default MainPage;
