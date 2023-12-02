import React from 'react';
import PostsSlider from 'src/components/organisms/PostsSlider';

import classes from './styles.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className={classes.main}>
      <div className={classes.section}>
        <PostsSlider title="Популярне" />
      </div>

      <div className={classes.section}>
        <PostsSlider title="Останні новини" />
      </div>

      <div className={classes.section}>
        <PostsSlider title="Зараз обговорюють" />
      </div>
    </div>
  );
};

export default MainPage;
