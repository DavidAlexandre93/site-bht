import "../styles/components/FloatingButtonNewsletter.css";

import { Box, Fab, Tooltip } from "@mui/material";
import { FaEnvelopeOpenText } from "react-icons/fa";
import scrollToSection from "../utils/scrollToSection";
import useScrollPosition from "../hooks/useScrollPosition";
import { IoMdArrowUp } from "react-icons/io";

const FloatingButtonNewsletter = () => {
  const scrollPosition = useScrollPosition();
  const newsletterOffsetTop =
    document.getElementById("newsletter")?.offsetTop || 0;
  const headerHeight = document.getElementById("header")?.offsetHeight || 0;
  const newsletterSectionScrollPosition =
    newsletterOffsetTop - headerHeight - 1;

  const fabNewsletterStyles = {
    "&": {
      backgroundColor: "#d10000",
    },
    "&:hover": {
      backgroundColor: "#b80000",
    },
    "&:active": {
      backgroundColor: "#bb0000",
    },
  };

  const fabBeginStyles = {
    "&": {
      backgroundColor: "#fff",
    },
    "&:hover": {
      backgroundColor: "#cdcdcd",
    },
    "&:active": {
      backgroundColor: "#aeaeae",
    },
  };

  return (
    <Box position={"fixed"} bottom={20} right={20} zIndex={2}>
      {newsletterSectionScrollPosition === -1 ||
      scrollPosition.y < newsletterSectionScrollPosition ? (
        <Tooltip title="Inscreva-se na newsletter">
          <Fab
            sx={fabNewsletterStyles}
            className="floating-button-newsletter"
            style={{ boxShadow: "0 0 0 0 #d1000080" }}
            onClick={() => scrollToSection("newsletter")}
          >
            <FaEnvelopeOpenText color={"#fff"} size={18} />
          </Fab>
        </Tooltip>
      ) : (
        <Tooltip title="Voltar ao topo">
          <Fab sx={fabBeginStyles} onClick={() => scrollToSection("begin")}>
            <IoMdArrowUp color={"#000"} size={22} />{" "}
          </Fab>
        </Tooltip>
      )}
    </Box>
  );
};

export default FloatingButtonNewsletter;
