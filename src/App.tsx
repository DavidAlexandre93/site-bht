import "./lib/i18n";

import { useEffect, useState } from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./app/Home";
import OurStory from "./app/OurStory";
import ImportantAnnouncements from "./app/ImportantAnnouncements";
import Store from "./app/Store";
import Staff from "./app/Staff";
import Newsletter from "./app/Newsletter";
import Footer from "./components/Footer";
import FloatingButtonNewsletter from "./components/FloatingButtonNewsletter";
import wolfRunning from "./assets/gif/wolfRunning.gif";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 1024,
        xl: 1200,
      },
    },
  });

  // Testar carregamento da página em PROD
  // Caso carregue muito rápido a tela, colocar um tempo de 2s
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    console.log("preloader", preloader);
    const hidePreloader = () => {
      if (preloader) {
        setTimeout(() => {
          setIsLoaded(true);
        }, 2000);
      }
    };
    window.addEventListener("load", hidePreloader);

    return () => window.removeEventListener("load", hidePreloader);
  }, []);

  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: { borderRadius: "10px", background: "#333", color: "#fff" },
        }}
      />
      <ThemeProvider theme={theme}>
        <Box
          height={"100%"}
          width={"100%"}
          position={isLoaded ? "initial" : "fixed"}
          overflow={isLoaded ? "initial" : "hidden"}
        >
          <Box
            position={"absolute"}
            display={"flex"}
            justifyContent={"center"}
            zIndex={10002}
            bgcolor={"#fff"}
            style={{
              visibility: isLoaded ? "hidden" : "initial",
              transition: "0.2s",
            }}
            width={"100%"}
            height={"100%"}
          >
            <Box className="wolf-loading" id="preloader">
              <img
                width={"100%"}
                src={wolfRunning}
                alt="wolf-running"
                style={{ mixBlendMode: "multiply" }}
              />
            </Box>
          </Box>
          <FloatingButtonNewsletter />
          <Navbar />
          <Home />
          <OurStory />
          <ImportantAnnouncements />
          <Store />
          <Staff />
          <Newsletter />
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
