import { CSSProperties } from 'react';

import { DEFAULT_COLORS } from './../styles/colors/colors';

export const useStyles = (): CSSProperties => {
  const styles = {
    ...DEFAULT_COLORS,
    '--font': 'Roboto, sans-serif',
  };

  return styles;
};
