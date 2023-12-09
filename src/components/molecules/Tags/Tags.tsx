import React from 'react';
import HighlightedText from 'src/components/atoms/HighlightedText';

import classes from './styles.module.scss';

interface IProps {
  tags: string[];
}

const Tags: React.FC<IProps> = ({ tags }) => (
  <div className={classes.container}>
    <HighlightedText>Теги</HighlightedText>

    <ul className={classes.list}>
      {tags.map((tag) => (
        <li className={classes.item} key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
