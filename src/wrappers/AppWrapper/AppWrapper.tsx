import React, { PropsWithChildren } from "react";
import StylesWrapper from "../StylesWrapper";

const AppWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <StylesWrapper>{children}</StylesWrapper>
);

export default AppWrapper;
