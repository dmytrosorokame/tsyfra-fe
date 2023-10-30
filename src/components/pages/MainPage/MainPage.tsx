import React from 'react';
import Button from 'src/components/atoms/Button';
import IconButton from 'src/components/atoms/IconButton';
import ArrowIcon from 'src/icons/ArrowIcon';
import { IconButtonSize } from 'src/types/icon-buttons';

import classes from './styles.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className={classes.main}>
      <Button isDisabled isOutlined Icon={<ArrowIcon />}>
        Click me!
      </Button>

      <IconButton size={IconButtonSize.SMALL} isDisabled>
        <ArrowIcon />
      </IconButton>
    </div>
  );
};

export default MainPage;
