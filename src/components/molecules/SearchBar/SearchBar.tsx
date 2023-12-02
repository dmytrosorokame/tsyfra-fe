import { faEllipsisVertical, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';

import classes from './styles.module.scss';

const SearchBar: React.FC = () => (
  <div className={classes.container}>
    <FontAwesomeIcon className={classes.icon} icon={faEllipsisVertical} />

    <input className={classes.input} placeholder="Пошук" type="text" />

    <FontAwesomeIcon className={classNames(classes.icon, classes.searchIcon)} icon={faMagnifyingGlass} />
  </div>
);

export default SearchBar;
