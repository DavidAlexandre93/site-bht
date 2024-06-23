import { ReactNode, useContext } from "react";
import { Box } from "@mui/material";
import ThemeProvider from "./ThemeProvider";
import { LoadingContext } from "../../contexts/LoadingContext";

type AppContainerProps = {
  children: ReactNode;
};

const AppContainer = (props: AppContainerProps) => {
  const { children } = props;
  const { isLoading } = useContext(LoadingContext);

  return (
    <ThemeProvider>
      <Box
        height={"100%"}
        width={"100%"}
        position={isLoading ? "fixed" : "initial"}
        overflow={isLoading ? "hidden" : "initial"}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default AppContainer;
