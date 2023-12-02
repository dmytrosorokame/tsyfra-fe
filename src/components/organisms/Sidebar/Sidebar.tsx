import { faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HighlightedText from 'src/components/atoms/HighlightedText';
import IconButton from 'src/components/atoms/IconButton';
import { useCommonStore } from 'src/store/common.store';

import classes from './styles.module.scss';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const isOpen = useCommonStore((state) => state.isSidebarOpen);
  const closeSidebar = useCommonStore((state) => state.closeSidebar);

  const handleNavigateToHome = () => {
    navigate('/');
    closeSidebar();
  };

  const handleNavigateToCategories = () => {
    navigate('/categories');
    closeSidebar();
  };

  return (
    <div className={classNames(classes.container, { [classes.open]: isOpen })}>
      <div className={classes.topContainer}>
        <button onClick={handleNavigateToHome} className={classes.logo}>
          Цифра
        </button>

        <IconButton onClick={closeSidebar}>
          <FontAwesomeIcon icon={faXmark} />
        </IconButton>
      </div>

      <button onClick={handleNavigateToCategories} className={classes.categoriesContainer}>
        <HighlightedText className={classes.categoriesTitle}>Категорії</HighlightedText>

        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <ul className={classes.pages}>
        <li className={classes.page}>
          <Link className={classes.pageLink} to="/contact" onClick={closeSidebar}>
            Зв'язатись з нами
          </Link>
        </li>

        <li className={classes.page}>
          <Link className={classes.pageLink} to="/about" onClick={closeSidebar}>
            Про нас
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
