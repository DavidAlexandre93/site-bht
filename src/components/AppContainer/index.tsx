import { ReactNode, useContext } from "react";
import { Box } from "@mui/material";
import ThemeProvider from "./ThemeProvider";
import { Toaster } from "react-hot-toast";
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
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            style: { borderRadius: "10px", background: "#333", color: "#fff" },
          }}
        />
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default AppContainer;
