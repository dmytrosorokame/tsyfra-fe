import { faAnglesUp, faBookmark, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from 'src/components/atoms/Button';
import { ButtonSize } from 'src/types/buttons';

import classes from './styles.module.scss';

const FooterNavigation: React.FC = () => {
  const handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={classes.container}>
      <div>
        <Button Icon={<FontAwesomeIcon icon={faHouse} />} size={ButtonSize.SMALL}>
          Home
        </Button>
      </div>

      <button className={classes.button}>
        <FontAwesomeIcon icon={faBookmark} />
      </button>

      <button className={classes.button}>
        <FontAwesomeIcon icon={faUser} />
      </button>

      <button onClick={handleScrollToTop} className={classes.button}>
        <FontAwesomeIcon icon={faAnglesUp} />
      </button>
    </div>
  );
};

export default FooterNavigation;
