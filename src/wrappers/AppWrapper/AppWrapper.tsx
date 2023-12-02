import React, { PropsWithChildren } from 'react';
import FooterNavigation from 'src/components/molecules/FooterNavigation';
import Navigation from 'src/components/organisms/Navigation/Navigation';
import Sidebar from 'src/components/organisms/Sidebar';
import StylesWrapper from 'src/wrappers/StylesWrapper';

import classes from './styles.module.scss';

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <StylesWrapper>
    <div className={classes.container}>
      <Navigation />

      <main className={classes.mainContainer}>{children}</main>

      <Sidebar />
      <FooterNavigation />
    </div>
  </StylesWrapper>
);

export default AppWrapper;
