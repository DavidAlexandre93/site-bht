import { ReactNode } from "react";
import { ThemeProvider as ThemeProviderMUI, createTheme } from "@mui/material";

type ThemeProviderProps = {
  children: ReactNode;
};

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 1024,
        xl: 1200,
        xxl: 1400,
      },
    },
  });

  return <ThemeProviderMUI theme={theme}>{children}</ThemeProviderMUI>;
};

export default ThemeProvider;
