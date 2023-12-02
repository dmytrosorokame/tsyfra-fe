import { faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import HighlightedText from 'src/components/atoms/HighlightedText';
import IconButton from 'src/components/atoms/IconButton';
import { useCommonStore } from 'src/store/common.store';

import classes from './styles.module.scss';

const Sidebar: React.FC = () => {
  const isOpen = useCommonStore((state) => state.isSidebarOpen);
  const closeSidebar = useCommonStore((state) => state.closeSidebar);

  return (
    <div className={classNames(classes.container, { [classes.open]: isOpen })}>
      <div className={classes.topContainer}>
        <p className={classes.logo}>Tsyfra</p>

        <IconButton onClick={closeSidebar}>
          <FontAwesomeIcon icon={faXmark} />
        </IconButton>
      </div>

      <button className={classes.categoriesContainer}>
        <HighlightedText className={classes.categoriesTitle}>Categories</HighlightedText>

        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <ul>
        <li>{/* <NavLink to="/contact">Contact Us</NavLink> */}</li>

        <li>{/* <NavLink to="/about">about us</NavLink> */}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
