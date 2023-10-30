import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from 'src/components/atoms/Button';
import IconButton from 'src/components/atoms/IconButton';
import AuthorCard from 'src/components/molecules/AuthorCard';
import { IconButtonSize } from 'src/types/icon-buttons';

import classes from './styles.module.scss';

const MainPage: React.FC = () => {
  return (
    <div className={classes.main}>
      <Button isDisabled isOutlined Icon={<FontAwesomeIcon icon={faBookmark} />}>
        Click me!
      </Button>

      <IconButton size={IconButtonSize.SMALL} isDisabled>
        <FontAwesomeIcon icon={faBookmark} />
      </IconButton>

      <AuthorCard
        title="Dmytro"
        subtitle="17 oct, 2023"
        image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        onSaveClick={() => {}}
      />
    </div>
  );
};

export default MainPage;
