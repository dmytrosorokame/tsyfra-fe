import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import IconButton from 'src/components/atoms/IconButton';
import SearchBar from 'src/components/molecules/SearchBar/SearchBar';
import { useCommonStore } from 'src/store/common.store';

import classes from './styles.module.scss';

const Navigation: React.FC = () => {
  const openSidebar = useCommonStore((state) => state.openSidebar);

  return (
    <div className={classes.container}>
      <IconButton onClick={openSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </IconButton>

      <SearchBar />
    </div>
  );
};

export default Navigation;
