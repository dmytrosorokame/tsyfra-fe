import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import IconButton from 'src/components/atoms/IconButton';
import SearchBar from 'src/components/molecules/SearchBar/SearchBar';

import classes from './styles.module.scss';

const Navigation: React.FC = () => (
  <div className={classes.container}>
    <IconButton>
      <FontAwesomeIcon icon={faBars} />
    </IconButton>

    <SearchBar />
  </div>
);

export default Navigation;
