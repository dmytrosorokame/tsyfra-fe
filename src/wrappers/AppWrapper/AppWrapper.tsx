import React, { PropsWithChildren } from 'react';
import Sidebar from 'src/components/organisms/Sidebar';
import StylesWrapper from 'src/wrappers/StylesWrapper';

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <StylesWrapper>
    {children}

    <Sidebar />
  </StylesWrapper>
);

export default AppWrapper;
