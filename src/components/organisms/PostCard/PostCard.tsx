import React from 'react';
import AuthorCard from 'src/components/molecules/AuthorCard';

import classes from './styles.module.scss';

interface IProps {
  title: string;
  subtitle: string;
  image: string;
  date: Date;
  onClick?: () => void;
  authorName: string;
  authorImage: string;
  isSaved?: boolean;
  onSaveClick?: () => void;
}

const PostCard: React.FC<IProps> = ({
  title,
  subtitle,
  image,
  date,
  onClick,
  authorName,
  authorImage,
  isSaved,
  onSaveClick,
}) => (
  <button onClick={onClick} className={classes.container}>
    <img className={classes.image} src={image} alt={title} />

    <div className={classes.content}>
      <h5 className={classes.title}>{title}</h5>

      <p className={classes.subtitle}>{subtitle}</p>
    </div>

    <AuthorCard name={authorName} image={authorImage} date={date} isSaved={isSaved} onSaveClick={onSaveClick} />
  </button>
);

export default PostCard;
