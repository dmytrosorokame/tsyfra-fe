import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'src/components/atoms/Button';
import { FOOTER_BUTTONS } from 'src/constants/footer-navigation.constants';
import { ButtonSize } from 'src/types/buttons';

import classes from './styles.module.scss';

const FooterNavigation: React.FC = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={classes.container}>
      {FOOTER_BUTTONS.map(({ icon, path, label, id }) => {
        const isActive = location.pathname === path;
        const isNoOneActive = !FOOTER_BUTTONS.some(({ path }) => location.pathname === path);

        if (isActive || (isNoOneActive && id === 0)) {
          return (
            <div key={id}>
              <Button
                isShadowed={isNoOneActive && id === 0}
                onClick={() => navigate(path)}
                Icon={<FontAwesomeIcon icon={icon} />}
                size={ButtonSize.SMALL}
              >
                {label}
              </Button>
            </div>
          );
        }

        return (
          <button onClick={() => navigate(path)} key={id} className={classes.button}>
            <FontAwesomeIcon icon={icon} />
          </button>
        );
      })}

      <button onClick={handleScrollToTop} className={classes.button}>
        <FontAwesomeIcon icon={faAnglesUp} />
      </button>
    </div>
  );
};

export default FooterNavigation;
