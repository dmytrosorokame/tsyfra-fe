import { DEFAULT_COLORS } from "./../styles/colors/colors";

import { CSSProperties } from "react";

export const useStyles = (): CSSProperties => {
  const styles = {
    ...DEFAULT_COLORS,
  };

  return styles;
};
