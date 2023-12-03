import React from 'react';
import HighlightedText from 'src/components/atoms/HighlightedText';

import classes from './styles.module.scss';

interface IProps {
  image: string;
  title: string;
}

const CategoryCard: React.FC<IProps> = ({ image, title }) => (
  <div className={classes.container}>
    <img className={classes.image} src={image} alt={title} />

    <HighlightedText>{title}</HighlightedText>
  </div>
);

export default CategoryCard;
