import React, { PropsWithChildren } from 'react';
import FooterNavigation from 'src/components/molecules/FooterNavigation';
import Sidebar from 'src/components/organisms/Sidebar';
import StylesWrapper from 'src/wrappers/StylesWrapper';

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <StylesWrapper>
    {children}

    <Sidebar />
    <FooterNavigation />
  </StylesWrapper>
);

export default AppWrapper;
