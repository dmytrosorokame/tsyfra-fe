import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import classes from './styles.module.scss';

interface IProps {
  className?: string;
}

const HighlightedText: React.FC<PropsWithChildren<IProps>> = ({ children, className }) => (
  <p className={classNames(classes.text, className)}>{children}</p>
);

export default HighlightedText;
