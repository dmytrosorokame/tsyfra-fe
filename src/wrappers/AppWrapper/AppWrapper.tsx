import React, { PropsWithChildren } from 'react';
import StylesWrapper from 'src/wrappers/StylesWrapper';

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => <StylesWrapper>{children}</StylesWrapper>;

export default AppWrapper;
