import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faSolidBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import IconButton from 'src/components/atoms/IconButton';
import { formatDate } from 'src/utils/formatDate';

import classes from './styles.module.scss';

interface IProps {
  name: string;
  date: Date;
  image: string;
  isSaved?: boolean;
  onSaveClick?: () => void;
}

const AuthorCard: React.FC<IProps> = ({ name, date, image, isSaved, onSaveClick }) => {
  const isShowSaveButton = !!onSaveClick;

  const formattedDate = formatDate(date);

  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <img className={classes.image} src={image} alt={name} />

        <div className={classes.texts}>
          <h6 className={classes.title}>{name}</h6>

          <p className={classes.subtitle}>{formattedDate}</p>
        </div>
      </div>
      {isShowSaveButton && (
        <IconButton onClick={onSaveClick}>
          {isSaved ? <FontAwesomeIcon icon={faSolidBookmark} /> : <FontAwesomeIcon icon={faBookmark} />}
        </IconButton>
      )}
    </div>
  );
};

export default AuthorCard;
