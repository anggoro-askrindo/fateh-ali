import { ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import theme from "@/styles/theme";

type Props = {
  children: ReactNode;
};

/* ------------------------------ Start ------------------------------*/
export const MuiThemeProvider = ({ children }: Props) => {
  return (
    <AppCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppCacheProvider>
  );
};
