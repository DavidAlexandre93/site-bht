import "../styles/components/FloatingButtonNewsletter.css";

import { Box, Fab, Tooltip } from "@mui/material";
import { FaEnvelopeOpenText } from "react-icons/fa";
import scrollToSection from "../utils/scrollToSection";
import useScrollPosition from "../hooks/useScrollPosition";
import { useSpring, animated } from "react-spring";

const FloatingButtonNewsletter = () => {
  const scrollPosition = useScrollPosition();
  const newsletterOffsetTop =
    document.getElementById("newsletter")?.offsetTop || 0;
  const headerHeight = document.getElementById("header")?.offsetHeight || 0;
  const newsletterSectionScrollPosition =
    newsletterOffsetTop - headerHeight - 1;

  const fadeStyle = useSpring({
    opacity: scrollPosition.y >= newsletterSectionScrollPosition ? 0 : 1,
    config: { duration: 100 },
  });

  return (
    <animated.div style={fadeStyle}>
      <Box position={"fixed"} bottom={20} right={20} zIndex={1}>
        <Tooltip title="Inscreva-se na newsletter">
          <Fab
            sx={{
              "&": {
                backgroundColor: "#d10000",
              },
              "&:hover": {
                backgroundColor: "#b80000",
              },
              "&:active": {
                backgroundColor: "#bb0000",
              },
            }}
            className="floating-button-newsletter"
            style={{ boxShadow: "0 0 0 0 #d1000080" }}
            onClick={() => scrollToSection("newsletter")}
          >
            <FaEnvelopeOpenText color={"#fff"} size={18} />
          </Fab>
        </Tooltip>
      </Box>
    </animated.div>
  );
};

export default FloatingButtonNewsletter;
