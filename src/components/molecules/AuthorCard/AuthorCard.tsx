import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faSolidBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import IconButton from 'src/components/atoms/IconButton';

import classes from './styles.module.scss';

interface IAuthorCardProps {
  title: string;
  subtitle: string;
  image: string;
  isSaved?: boolean;
  onSaveClick: () => void;
}

const AuthorCard: React.FC<IAuthorCardProps> = ({ title, subtitle, image, isSaved, onSaveClick }) => (
  <div className={classes.container}>
    <img className={classes.image} src={image} alt={title} />

    <div className={classes.contentContainer}>
      <h6 className={classes.title}>{title}</h6>

      <p className={classes.subtitle}>{subtitle}</p>
    </div>

    <IconButton onClick={onSaveClick}>
      {isSaved ? <FontAwesomeIcon icon={faSolidBookmark} /> : <FontAwesomeIcon icon={faBookmark} />}
    </IconButton>
  </div>
);

export default AuthorCard;
