import React from 'react';
import Button from 'src/components/atoms/Button';
import ArrowIcon from 'src/icons/arrow-icon';

import classes from './styles.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className={classes.main}>
      <Button isDisabled isOutlined Icon={<ArrowIcon />}>
        Click me!
      </Button>
    </div>
  );
};

export default MainPage;
