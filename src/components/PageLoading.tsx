import "../styles/components/PageLoading.css";
import wolfRunning from "../assets/gif/wolfRunning.gif";

import { Box } from "@mui/material";
import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";

const PageLoading = () => {
  const { isLoading, entryCircle } = useContext(LoadingContext);

  return (
    <Box
      className={`${
        (!isLoading && "animation-exit-circle") ||
        (isLoading && entryCircle && "animation-entry-circle")
      }`}
      position={"absolute"}
      display={"flex"}
      justifyContent={"center"}
      zIndex={10000}
      bgcolor={"white"}
      width={"100%"}
      height={"100%"}
      overflow={"hidden"}
    >
      <Box
        width={"100%"}
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box className="wolf-loading">
          <img width={"100%"} src={wolfRunning} alt="wolf-running" />
        </Box>
      </Box>
    </Box>
  );
};

export default PageLoading;
